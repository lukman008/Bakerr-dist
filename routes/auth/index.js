const bodyParser = require('body-parser')
const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('../../server').bcrypt
const router = express.Router()
const keys = require('../../keys-config')
const cookieParser = require('cookie-parser')
router.use(
  bodyParser.urlencoded({
    extended: true
  })
)
router.use(bodyParser.json())
router.use(cookieParser(keys.cookie))

router.post('/signin', function (req, res) {
  req.db.createCollection('Signatories', function (err, collection) {
    if (err) throw res.status(500).send(err)
    collection.findOne({ email: req.body.email }, function (err, result) {
      if (err) throw res.status(500).send(err)
      if (!result) {
        res.status(404).send({
          state: 'User not found'
        })
        return
      }
      bcrypt.compare(req.body.password, result.password, function (err, resp) {
        if (err) throw res.status(500).send(err)
        if (resp) {
          jwt.sign(result, keys.jwt, function (err, token) {
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
              payload: result
            })
          })
        } else {
          res.status(401).send({
            state: 'Incorrect email or password'
          })
        }
      })
    })
  })
})

router.post('/signout', function(req,res){
  res.cookie('token', req.signedCookies.token, {
    expires: new Date(),
    httpOnly: true,
    signed: true,
    secure: false,
    domain: 'bakerrpay.herokuapp.com'
  })
  res.clearCookie('token', {signed: true});
  res.json({
    state: "OK",
    payload:null
  })
})

module.exports = router
