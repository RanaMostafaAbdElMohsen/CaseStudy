var express = require('express');
var router = express.Router();
var journeycontroller = require('../controller/journey.js');

router.get('/findroomid',journeycontroller.findroomid);
router.get('/findjourneys',journeycontroller.findjourneys);
router.get('/subscribejourney',journeycontroller.subscribejourney);
router.post('/updatecuststatus',journeycontroller.updatecuststatus);
router.get('/retrievecuststatus',journeycontroller.retrievecuststatus)

module.exports = router;