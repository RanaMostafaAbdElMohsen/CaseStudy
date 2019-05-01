var express = require('express');
var router = express.Router();
var journeycontroller = require('../controller/journey.js');

router.get('/findroomid',journeycontroller.findroomid);

module.exports = router;