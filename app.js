//npm requires/packages we need//
var fs = require('fs');
var express = require('express');
var lessCSS = require('less-middleware');
var bodyParser = require('body-parser');

var app = express();
var router = express.Router();
var ObjectID = require('mongodb').ObjectID;

//routes//
var routes = require('./routes/index');
var artists = require('./routes/artists');
var albums = require('./routes/albums');
// var songs = require('./routes/songs');

//middlewares//
app.use(bodyParser.urlencoded({extended: true}));
app.use(lessCSS('public'));
app.use(express.static('public'));
app.locals.title = 'NodeTunes';

//DB variables//
if(process.env.NODE_ENV !== 'production') {
  require('./lib/secrets');
}
require('./lib/mongodb');


//settings//
app.set('view engine', 'ejs');
app.set('case sensitive routing', true); //makes it case sensitive
app.set('strict routing', true);

//routes//
app.use('/', routes);
app.use('/artists', artists);
app.use('/albums', albums);
// app.use('/songs', songs);

//Errors//
app.use(function (req, res) {
  res.status(403).send('Unauthorized!');
});

app.use(function (err, req, res, next) {
  console.log('ERRRRRRR', err.stack);
  res.status(500).send('My fault');
});


var port = process.env.PORT || 3000;

var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('NodeTunes app listening at http://%s:%d', host, port);
});
