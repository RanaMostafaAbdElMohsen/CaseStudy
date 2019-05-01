var express = require('express');
var router = express.Router();
var customercontroller = require('../controller/customer.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('customer', { title: 'Express' });
});

router.get('/signin',customercontroller.signin);

module.exports = router;
