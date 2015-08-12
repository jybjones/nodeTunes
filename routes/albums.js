var express = require('express');
var router = express.Router();
var ObjectID = require('mongodb').ObjectID;

router.get('/', function(req, res) {
  var collection = global.db.collection('albums');

  collection.find().toArray(function(err, albums) {
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

router.post('/albums/:id/delete', function(req, res){
   var collection = global.db.collection('albums');
   collection.remove({_id: ObjectID(req.params.id)}, function(err) {
    res.redirect('/albums');
});
 });



module.exports = router;
