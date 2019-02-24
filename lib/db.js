const MongoClient = require('mongodb').MongoClient;
const mongo  ="../mongo-config.js"

const connection = MongoClient.connect(mongo.url, {
  useNewUrlParser: true
});

module.exports = (async function(){
    connection.then(function(cursor){
        let db = cursor.db(mongo.db)
        return db;
      })
      try{
          let cursor =await MongoClient.connect(mongo.url, {
            useNewUrlParser: true
          });
          let db = cursor(mongo.db)
          return db;
      }catch(e){
        throw e
      }
});