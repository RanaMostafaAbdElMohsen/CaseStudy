var express = require('express');
var router = express.Router();
var journeycontroller = require('../controller/journey.js');

router.get('/findroomid',journeycontroller.findroomid);
router.get('/findjourneys',journeycontroller.findjourneys);
router.get('/subscribejourney',journeycontroller.subscribejourney);

module.exports = router;