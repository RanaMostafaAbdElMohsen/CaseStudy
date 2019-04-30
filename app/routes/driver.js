var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/driver', function(req, res, next) {
  res.render('Driver', { title: 'Express' });
});

module.exports = router;
