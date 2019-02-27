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


router.get('/resolve_account/:acct/:bank', function(req,res){
    request(
        {
          url: `https://api.paystack.co/bank/resolve?account_number=${req.params.acct}&bank_code=${req.params.bank}`,
          method: 'GET',
          jar:true,
          headers: {
            Authorization: 'Bearer ' + paystack.secret
          }
        },
        function (err, response, body) {
          if (err) throw res.status(500).send(err)
          let data = JSON.parse(body)
          if (response.statusCode === 200) {
           
            if (data.status && data.message === 'Account number resolved') {
                res.json({
                    state: "OK",
                    payload: data.data  
                })
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
})


module.exports = router;