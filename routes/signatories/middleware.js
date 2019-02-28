
const request = require('request')
const jwt = require('jsonwebtoken')
const keys = require('../../keys-config')
const paystack = require('../../paystack-config')
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

  let middleware = {
      authorize,
      validate,
      exists
  }

  module.exports = middleware