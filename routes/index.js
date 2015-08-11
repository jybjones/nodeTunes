var express = require('express');
var router = express.Router();

 router.get('/', function (req, res) {
   res.send('Hello Testing Hello res.send!');
 });




module.exports = router;
