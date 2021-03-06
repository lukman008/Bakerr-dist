const express = require("express");
const morgan = require("morgan");
const history = require('connect-history-api-fallback');
const mongo = require("./mongo-config");
const keys = require("./keys-config");
const cookieParser = require("cookie-parser");
const MongoClient = require("mongodb").MongoClient;
const bcrypt = require('bcrypt');

module.exports.bcrypt = bcrypt
const connection = MongoClient.connect(mongo.url, {
  useNewUrlParser: true,
});
function db(req, res, next) {
  connection
    .then(function(cursor) {
      let _db = cursor.db(mongo.db);
      req.db = _db;
      next();
    })
    .catch(function(err) {
      if (err) {
        console.log("--------------- Database Error -----------------")
        console.log(err)
        res.status(500).send(err);
        return
      }
    });
}

var serveStatic = require("serve-static");
function requireHTTPS(req, res, next) {
  if (!req.secure && req.get('x-forwarded-proto') !== 'https' && process.env.NODE_ENV !== "development") {
    return res.redirect('https://' + req.get('host') + req.url);
  }
  next();
}

const app = express();
app.use(cookieParser(keys.cookie));
app.use(requireHTTPS);
app.use(morgan("dev"));
app.use(history());
app.use(serveStatic(__dirname + "/public"));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"
  );
  next();
});

app.use("/api", db, require("./routes/"));
var port = process.env.PORT || 8081;
app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});


