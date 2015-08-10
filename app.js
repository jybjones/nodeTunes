//npm requires/packages we need//
var fs = require('fs');
var express = require('express');
var lessCSS = require('less-middleware');
var bodyParser = require('body-parser');

var app = express();

//settings//
app.set('view engine', 'ejs');
app.set('case sensitive routing', true); //makes it case sensitive
app.set('strict routing', true);
