const bodyParser = require("body-parser");
const express = require("express");
const request = require("request");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt')
const router = express.Router();
const keys = require("../../keys-config");
const cookieParser = require("cookie-parser");
const uniqid = require("uniqid");
const paystack = require("../../paystack-config");
const validator = require("../../schemas/object");

router.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
router.use(bodyParser.json());

router.use(cookieParser(keys.cookie));

function isEmptyObj(obj) {
  let isEmpty = true;
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      isEmpty = false;
    }
  }
  return isEmpty;
}
function authorize(req, res, next) {
  console.log("--------Verify middleware---------");
  const cookies = req.signedCookies;
  console.log(req.body.token)
  if (isEmptyObj(cookies) && req.body.token == null) {
    res.status(403).send({
      state: "Forbidden",
    });
    console.log("-----------No cookies----------");
  } else {
    const bearerToken = cookies.token ? cookies.token : req.body.token;
    delete req.body.token;
    jwt.verify(bearerToken, keys.jwt, (err, authData) => {
      if (err) {
        res.status(500).send({
          state: "ERROR",
          payload: err,
        });
        return;
      }
      req.sender = authData;
      next();
    });
  }
}




router.post("/", authorize, function(req, res) {
  let rules = [
    {
      key: "invoice",
      required: true,
      type: "string",
    },
    {
      key: "vendor",
      required: true,
      type: "object",
    },
    {
      key: "amount",
      required: true,
      type: "number",
    },
    {
      key: "narration",
      required: true,
      type: "string",
    },
    {
      key: "password",
      required: true,
      type: "string",
    },
    {
      key: "source",
      required: true,
      type: "string"
    },
  ];
  let validation = validator(req.body, rules);
  if (!validation.isValid) {
    res.status(400).send(validation);
  }
  req.db.createCollection("Signatories", function(err, collection) {
    if (err) {
      res.status(500).send(JSON.stringify(err));
      return
    } 
    collection.findOne({ email: req.sender.email }, function(err, result) {
      if (err) throw res.status(500).send(err);
      if (!result) {
        res.status(404).send({
          state: "User not found",
        });
        return;
      }
      req.body.amount.replace(/,/g, "");
      
      bcrypt.compare(req.body.password, result.password, function(err, resp) {
        if (err) throw res.status(500).send(err);
        if (resp) {
          request({
            url: "https://api.paystack.co/transfer",
            method: "POST",
            json: true,
            body: {
              reference:req.body.invoice,
              source: "balance",
              reason: req.body.narration,
              amount: parseFloat(req.body.amount) * 100,
              recipient: req.body.vendor.recipient_code
            },
            headers: {
              Authorization: "Bearer " + paystack.secret,
            },
          }, function(err,response,body){
            if(err) throw res.status(500).send(err)
            if(response.statusCode !== 200){
              res.status(response.statusCode).send(response.statusMessage)
              return
            } 
            req.db.createCollection('Payments', function(err, collection){
              if(err) throw res.status(500).send(err)
              delete req.body.password
              req.body._id = body.data.transfer_code
              req.body.signatory = req.sender
              req.body.status = body.data.status
              req.body.createdOn = new Date()
              collection.insertOne(req.body, {w:1}, function(err, result){
                if(err) throw res.status(500).send(err)
                console.log(result.ops)
                res.status(response.statusCode).json({
                  state: "OK",
                  payload: result.ops[0]
              })
              });
            })
           
          });
        } else {
          res.status(403).send({
            state: "Incorrect password",
          });
        }
      });
    });
  });

  // req.body.amount.replace(/,/g,'');
  // req.body.amount = parseFloat(req.body.amount) * 100
});


router.get("/", authorize, function(req,res){
  req.db.createCollection("Payments", function(err, collection){
    if(err) throw res.status(500).send(err)
    collection.find({}).toArray(function(err, payments){
      if(err) throw res.status(500).send(err)
      res.json({
        state: "OK",
        payload:payments
      })
    });
  })
})

module.exports = router;
