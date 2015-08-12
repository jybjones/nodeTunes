var express = require('express');
var router = express.Router();
var ObjectID = require('mongodb').ObjectID;

router.get('/', function(req, res) {
  var collection = global.db.collection('albums');

  collection.find({_id: req.params.id}).toArray(function(err, albums) {
    formattedAlbums = albums.map(function(album) {
      return {
        _id:         album._id,
        Artist:      album.artist,
        title:       album.title,
        genre:       album.genre,
        album:       album.year,
      };
    });
    res.render('templates/albums', {albums: formattedAlbums});
  });

});

router.get('/new', function (req, res) {
  res.render('templates/albums-new');
});

router.post('/new', function (req, res) {
  var collection = global.db.collection('albums');
    collection.save(req.body, function(){
      res.redirect('/albums');
    });
  });

router.post('/delete/:id', function(req, res){
   var collection = global.db.collection('albums');
   collection.remove({_id: ObjectID(req.params.id)}, function() {
    res.redirect('/albums');
});
 });

router.get('/albums/new', function(req, res) {
  var artist = req.query.artist;
  var collection = global.db.collection('albums');
  collection.find({$text: {$search: _id}}).toArray(function(err, results) {
      if (err) {res.send(err);}
      res.send(results);
    });
  });



module.exports = router;
