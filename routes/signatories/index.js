const bodyParser = require('body-parser')
const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('../../server').bcrypt
const saltRounds = 10;
const router = express.Router()
const keys = require('../../keys-config')
const cookieParser = require('cookie-parser')
const uniqid = require('uniqid')
const validator = require('../../schemas/object')
const middleware = require('./middleware')
router.use(
  bodyParser.urlencoded({
    extended: true
  })
)
router.use(bodyParser.json())

router.use(cookieParser(keys.cookie))


async function hashPassword (password) {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, saltRounds, function (err, hash) {
      if (err) reject(err)
      resolve(hash)
    })
  })
}
router.get('/', middleware.authorize,  function (req, res) {
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

router.post('/', [middleware.authorize, middleware.validate, middleware.exists], function (req, res) {
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
      length:11,
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
