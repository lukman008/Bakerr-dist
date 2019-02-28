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
const middleware = require('./middleware')
router.use(
  bodyParser.urlencoded({
    extended: true
  })
)
router.use(bodyParser.json())

router.use(cookieParser(keys.cookie))

router.get('/', middleware.authorize, function (req, res) {
  req.db.createCollection('Vendors', function (err, collection) {
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

router.post(
  '/',
  [middleware.authorize, middleware.exists, middleware.validate],
  function (req, res) {
    let newVendor = req.body
    newVendor._id = uniqid('ven-')
    let rules = [
      {
        key: 'account_number',
        required: true,
        type: 'number'
      },
      {
        key: 'vendor_name',
        required: true,
        type: 'string'
      },
      {
        key: 'bank_code',
        required: true,
        type: 'number'
      },
      {
        key: 'account_name',
        required: true,
        type: 'string'
      },
      {
        key: 'description',
        required: true,
        type: 'string'
      },
      {
        key: 'email',
        required: true,
        type: 'string'
      }
    ]
    let validation = validator(newVendor, rules)

    if (!validation.isValid) {
      res.status(400).send({
        state: validation
      })
      return
    }
    newVendor.createdOn = new Date()

    newVendor.type = 'nuban'
    newVendor.name = newVendor.vendor_name
    newVendor.currency = 'NGN'
    request(
      {
        url: 'https://api.paystack.co/transferrecipient',
        method: 'POST',
        body: newVendor,
        jar: true,
        json: true,
        headers: {
          Authorization: 'Bearer ' + paystack.secret
        }
      },
      function (err, response, body) {
        if (err) {
          throw res.status(500).send(err)
        }
        let data = body

        newVendor.recipient_code = data.data.recipient_code
        if (data.status) {
          req.db.createCollection('Vendors', function (err, collection) {
            if (err) throw res.status(500).send(err)
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
            state: data['message']
          })
        }
      }
    )
  }
)

router.post('/:id', middleware.authorize, function (req, res) {
  let rules = [
    {
      key: 'vendor_name',
      required: true,
      type: 'string'
    },
    {
      key: 'description',
      required: true,
      type: 'string'
    },
    {
      key: 'email',
      required: true,
      type: 'string'
    },
    {
      key: '_id',
      required: true,
      type: 'string'
    }
  ]
  let validation = validator(req.body, rules)
  let vendor = {
    email: req.body.email,
    name: req.body.vendor_name,
    description: req.body.description
  }
  if (!validation.isValid) {
    res.status(400).send({
      state: validation
    })
    return
  }
  console.log(vendor)
  request(
    {
      url: `https://api.paystack.co/transferrecipient/${vendor.recipient_code}`,
      method: 'PUT',
      body: vendor,
      json: true,
      jar: true,
      json: true,
      headers: {
        Authorization: 'Bearer ' + paystack.secret
      }
    },
    function (err, response, body) {
      console.log(body)
      if (err) throw res.status(500).send(err)
      if (body.status) {
        req.db.createCollection('Vendors', function (err, collection) {
          if (err) throw res.status(500).send(err)
          collection.findOneAndUpdate(
            { _id: req.params.id },
            { $set: vendor },
            {
              returnOriginal: false
            },
            function (err, result) {
              if (err) throw res.status(500).send(err)
              if (!result.lastErrorObject.updatedExisting) {
                res.status(204).json({
                  state: 'NOTHING CHANGED'
                })
                return
              }
              res.json({
                state: 'OK',
                payload: result.value
              })
            }
          )
        })
      } else {
        res.status(response.statusCode).send({
          state: data[response.statusMessage]
        })
      }
    }
  )
})

router.delete('/:recipient_code', middleware.authorize, function (req, res) {
  request({
    url: 'https://api.paystack.co/transferrecipient/'+ req.params.recipient_code,
    method: "DELETE",
    json: true,
      jar: true,
      json: true,
      headers: {
        Authorization: 'Bearer ' + paystack.secret
      }
  }, function(err, response, body ){
    if (err) throw res.status(500).send(err)
    if(body.status){
      req.db.createCollection('Vendors', function (err, collection) {
        if (err) {
          console.log(err)
          throw res.status(500).send(err)
        }
        collection.deleteOne({ recipient_code: req.params.recipient_code }, function (err, result) {
          if (err) {
            console.log(err)
            throw res.status(500).send(err)
          }
          res.json({
            state: 'OK',
            payload: result
          })
        })
      })
    }else{
      
        console.log(body)
        console.log(response.statusCode, response.statusMessage)
      
      res.status(response.statusCode).send(response.statusMessage)
    }
  })

})

module.exports = router
