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
    if (isEmptyObj(cookies) && req.body.token == null) {
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
      collection.findOne({ account_number: req.body.account_number }, function (
        err,
        ven
      ) {
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
    console.log("---- VALIDATE-----")
    if (!isEmail(req.body.email)) {
      res.status(400).send({
        state: 'INVALID EMAIL'
      })
      return;
    }
    request(
      {
        url: `https://api.paystack.co/bank/resolve?account_number=${
          req.body.account_number
        }&bank_code=${req.body.bank_code}`,
        method: 'GET',
        jar: true,
        headers: {
          Authorization: 'Bearer ' + paystack.secret
        }
      },
      function (err, response, body) {
        console.log(body)
        if (err) throw res.status(500).send(err)
        let data = JSON.parse(body)
        if (response.statusCode === 200) {
          if (data.status && data.message === 'Account number resolved') {
            req.body.account_name = data.data.account_name
            next()
          } else {
            res.status(400).send({
              state: data['message']
            })
          }
        } else {
          res.status(400).send({
            state: data['message']
          })
        }
      }
      
    )
  }

  const middleware = {
      validate,
      authorize,
      exists
  }

  module.exports = middleware