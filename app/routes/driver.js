var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/driver', function(req, res, next) {
  res.render('driver', { title: 'Express' });
});

module.exports = router;
