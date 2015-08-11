var mongo = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/nodetunes';

if (!global.db) {
  mongo.connect(url, function(err, db) {
    global.db = db;
  });
}


// var mongo = require('mongodb').MongoClient;

// var url = process.env.MONGODB_URL;
// console.log(process.env.MONGODB_URL);

// if (!global.db) {
//   mongo.connect(url, function(err, db) {
//     global.db = db;
//   });
// }
