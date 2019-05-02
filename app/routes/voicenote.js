var express = require('express');
var router = express.Router();
var voicecontroller = require('../controller/VoiceNote.js');

router.post('/addvn',voicecontroller.addvn);
router.post('/addplayedvn',voicecontroller.addplayedvn);
router.post('/listenedtovn',voicecontroller.listened);
router.get('/retrievelisteners',voicecontroller.retrievelisteners);
module.exports = router;