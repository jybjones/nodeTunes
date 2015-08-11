var express = require('express');
var router = express.Router();

 router.get(/hello/, function (req, res) {
   res.send('Hello Testing Hello res.send!');
 });




module.exports = router;
