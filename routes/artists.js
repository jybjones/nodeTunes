var express = require('express');
var router = express.Router();
var ObjectID = require('mongodb').ObjectID;

//subrouting here, so already in the root folder for artists
router.get('/', function(req, res) {
  var collection = global.db.collection('artists');

  collection.find().toArray(function(err, artists) {
    formattedArtists = artists.map(function(artist) {
      return {
        _id:       artist._id,
        name:      artist.name,
        genre:     artist.genre,
        bio:       artist.bio,
        album:     artist.album,
      };
    });
    res.render('templates/artists', {artists: formattedArtists});
  });

});

router.get('/new', function (req, res) {
  res.render('templates/artists-new');
});

router.post('/new', function (req, res) {
  var collection = global.db.collection('artists');
    collection.save(req.body, function(){
      res.redirect('/artists');
    });
  });

router.post('/delete/:id', function(req, res){
   var collection = global.db.collection('artists');
   collection.remove({_id: ObjectID(req.params.id)}, function() {
    res.redirect('/artists');
});
 });




module.exports = router;
