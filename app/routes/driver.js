var express = require('express');
var router = express.Router();
var drivercontroller = require('../controller/driver.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  var username=req.query.username;
  res.render('Driver', { user: username });
});

router.get('/signin',drivercontroller.signin);

module.exports = router;
