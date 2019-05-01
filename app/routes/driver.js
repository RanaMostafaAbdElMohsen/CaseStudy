var express = require('express');
var router = express.Router();
var drivercontroller = require('../controller/driver.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Driver', { title: 'Express' });
});

router.get('/signin',drivercontroller.signin);

module.exports = router;
