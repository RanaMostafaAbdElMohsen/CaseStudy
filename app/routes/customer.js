var express = require('express');
var router = express.Router();
var customercontroller = require('../controller/customer.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  var username=req.query.username;
  res.render('customer', { user: username });
});

router.get('/signin',customercontroller.signin);

module.exports = router;
