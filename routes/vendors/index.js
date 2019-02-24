const bodyParser = require('body-parser')
const express = require('express')
const request = require('request')
const jwt = require('jsonwebtoken')
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
  req.db.createCollection('Vendors', function (err, collection) {
    if (err) throw res.status(500).send(err.toString())
    collection.findOne({ account_number: req.body.account_number }, function (err, ven) {
      if (err) throw res.status(500).send(err)
      if (ven === null) {
        next()
      } else {
        res.json({
          state: 'VENDOR EXISTS',
          payload: ven
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
  if (!isEmail(req.body.email)) {
    res.status(400).send({
      state: 'INVALID EMAIL'
    })
  }
  request(
    {
      url: `https://api.paystack.co/bank/resolve?account_number=${req.body.account_number}&bank_code=${req.body.bank_code}`,
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + paystack.secret
      }
    },
    function (err, response, body) {
      if (err) throw res.status(500).send(err)
      let data = JSON.parse(body)
      if (response.statusCode === 200) {
       
        if (data.status && data.message === 'Account number resolved') {
            req.body.account_name = data.data.account_name
          next()
        } else {
          res.status(400).send({
            state: data["message"]
          })
        }
      } else {
        res.status(400).send({
            state: data["message"]
          })
      }
    }
  )
}

router.get('/', authorize, function (req, res) {
    req.body.createCollection('Vendors', function (err, collection) {
      if (err) throw res.status(500).send(err)
      collection.find({}, { password: 0 }).toArray(function (err, sigs) {
        if (err) throw res.status(500).send(err)
        res.json({
          state: 'OK',
          payload: sigs
        })
      })
    })
  })
  
  router.post('/', [authorize, exists , validate], function (req, res) {
   
    let newVendor = req.body;
    newVendor._id = uniqid('ven-')
    let rules = [
        {
            key: 'account_number',
            required: true,
            type:'number'
        },
        {
          key: 'vendor_name',
          required:true,
          type: 'string'
        },
        {
            key: 'bank_code',
            required:true,
            type: 'number'
        },
        {
            key:'account_name',
            required:true,
            type: 'string'
        },
        {
            key:'description',
            required: true,
            type:'string' 
        },
        {
            key: 'email',
            required: true,
            type:'string'
        }
    ]
    let validation = validator(newVendor, rules)

    if(!validation.isValid){
        res.status(400).send({
            state:validation,
        })
        return
    }
    newVendor.createdOn = new Date()
    newVendor.type = "nuban"
    newVendor.name = newVendor.vendor_name
    newVendor.currency = "NGN"
    request(
      {
        url: "https://api.paystack.co/transferrecipient",
        method: 'POST',
        body:newVendor,
        json:true,
        headers: {
          Authorization: 'Bearer ' + paystack.secret
        }
      },
      function (err, response, body) {
        if (err){
          console.log( err)
          throw res.status(500).send(err)
        }
        let data = body
        console.log("**********----------************")
        console.log(data)
        newVendor.recipient_code = data.data.recipient_code
         if (data.status) {
            req.db.createCollection('Vendors', function (err, collection) {
              if (err) throw err
              collection.insertOne(newVendor, { w: 1 }, function (err, result) {
                if (err) throw res.status(500).send(err)
                res.json({
                  state: 'OK',
                  payload: newVendor
                })
              })
            })
          } else {
            res.status(400).send({
              state: data["message"]
            })
            return
          }
      }
    )
    
    
    
  })

  
  module.exports = router;