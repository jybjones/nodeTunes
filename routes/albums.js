var express = require('express');
var router = express.Router();
var ObjectID = require('mongodb').ObjectID;

router.get('/', function(req, res) {
    res.render('templates/albums');
});

router.post('/', function(req, res) {
  // var collection = global.db.collection('artists');
  // collection.save(req.body, function() {
  //   res.redirect('/albums')
    res.render('templates/albums');
  });





module.exports = router;
