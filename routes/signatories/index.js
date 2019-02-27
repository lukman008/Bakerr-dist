const bodyParser = require('body-parser')
const express = require('express')
const request = require('request')
const jwt = require('jsonwebtoken')
const bcrypt = require('../../server').bcrypt
const saltRounds = 10;
const router = express.Router()
const keys = require('../../keys-config')
const cookieParser = require('cookie-parser')
const uniqid = require('uniqid')
const paystack = require('../../paystack-config')
const validator = require('../../schemas/object')

router.use(
  bodyParser.urlencoded({
    extended: true
  })
)
router.use(bodyParser.json())

router.use(cookieParser(keys.cookie))

function isEmptyObj (obj) {
  let isEmpty = true
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      isEmpty = false
    }
  }
  return isEmpty
}
function authorize (req, res, next) {
  console.log('--------Verify middleware---------')
  const cookies = req.signedCookies
  if (isEmptyObj(cookies) && req.body.token == null ) {
    res.status(403).send({
      state: 'Forbidden'
    })
    console.log('-----------No cookies----------')
  } else {
    const bearerToken = cookies.token ? cookies.token : req.body.token
    delete req.body.token
    jwt.verify(bearerToken, keys.jwt, (err, authData) => {
      if (err) {
        res.status(500).send({
          state: 'ERROR',
          payload: err
        })
        return
      }
      req.sender = authData
      next()
    })
  }
}
function exists (req, res, next) {
  req.body.bvn = parseInt(req.body.bvn)
  req.db.createCollection('Signatories', function (err, collection) {
    if (err) throw res.status(500).send(err)
    collection.findOne({ bvn: req.body.bvn }, function (err, sig) {
      if (err) throw res.status(500).send(err)
      if (sig === null) {
        next()
      } else {
        res.json({
          state: 'SIGNATORY EXISTS',
          payload: sig
        })
      }
    })
  })
}
function isEmail (email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}
function validate (req, res, next) {
  console.log('---------  VALIDATE EMAIL---------')
  if (!isEmail(req.body.email)) {
    res.status(400).send({
      state: 'INVALID EMAIL'
    })
  }
  console.log('---RESOLVE BVN-----')
  console.log(req.body)
  request(
    {
      url: 'https://api.paystack.co/bank/resolve_bvn/' + req.body.bvn,
      method: 'GET',
      jar:true,
      headers: {
        Authorization: 'Bearer ' + paystack.secret
      }
    },
    function (err, response, body) {
      if (err) throw res.status(500).send(err)
      if (response.statusCode === 200) {
        let data = JSON.parse(body)
        if (data.status && data.message === 'BVN resolved') {
          console.log(data.data.first_name)
          req.body.name = data.data.first_name + " "+ data.data.last_name
          req.body.phone = data.data.mobile

          next()
        } else {
          res.status(400).send({
            state: 'INVALID BVN'
          })
        }
      } else {
        console.log(response.statusCode, body)
        res.status(400).send({
            state: 'UNABLE TO RESOLVE BVN'
          })
      }
    }
  )
}

async function hashPassword (password) {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, saltRounds, function (err, hash) {
      if (err) reject(err)
      resolve(hash)
    })
  })
}
router.get('/', authorize,  function (req, res) {
  req.db.createCollection('Signatories', function (err, collection) {
    if (err) throw res.status(500).send(err)
    collection.find({}).project( { password: 0, bvn:0 }).toArray(function (err, sigs) {
      if (err) throw res.status(500).send(err)
      res.json({
        state: 'OK',
        payload: sigs
      })
    })
  })
})

router.post('/', [authorize, validate, exists], function (req, res) {
  if (req.sender.type !== 'SUPER') {
    res.status(403).send('FORBIDDEN')
    return
  }
  let email = req.body.email
  let bvn = req.body.bvn
  let type = req.body.type ? req.body.type : 'REGULAR'

  let newSignatory = {
    _id: uniqid('sig-'),
    name: req.body.name,
    phone: req.body.phone,
    email,
    bvn,
    type,
    status: 'INACTIVE',
    createdOn : new Date()
  }
  
  req.db.createCollection('Signatories', function (err, collection) {
    if (err) throw err
    collection.insertOne(newSignatory, { w: 1 }, function (err, result) {
      if (err) throw err
      res.json({
        state: 'OK',
        payload: newSignatory
      })
    })
  })
})

router.post('/:selector/activate', async function (req, res) {
  let body = req.body
  let rules = [
    {
      key: 'password',
      type: 'string',
      minLength: 8,
      required: true
    },
    {
      key: 'bvn',
      type: 'number',
      required: true
    }
  ]
  let validation = validator(body, rules)
  if (!validation.isValid) {
    res.status(400).send(validation)
    return
  }
  body.password = await hashPassword(body.password)
  body.status = 'ACTIVE'
  req.db.createCollection('Signatories', function (err, collection) {
    if (err) throw res.status(500).send(err)
   
    collection.findOneAndUpdate(
      {
        $or: [{ bvn: parseInt(req.params.selector) }, { _id: req.params.selector }],
        status: "INACTIVE"
      },
      {
        $set: body
      },
      {
        returnOriginal: false
      },
      function (err, result) {
        if (err) throw res.status(500).send(err)
        console.log(result)
        if(!result.lastErrorObject.updatedExisting){
            res.status(204).json({
                state: "NOTHING CHANGED"
            })
            return;
        }
        jwt.sign(result.value, keys.jwt, function (err, token) {
          if (err) throw res.status(500).send(err)
          res.cookie('token', token, {
            maxAge: 6048000000,
            httpOnly: true,
            signed: true,
            secure: false,
            domain: 'bakerrpay.herokuapp.com'
          })
          result.token = token
          delete result.password
          res.json({
            state: 'OK',
            payload: result.value
          })
        })
        
      }
    )
  })
})
module.exports = router
