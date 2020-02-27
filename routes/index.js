var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login/index', { title: 'Express Blog'});
});

router.get('/register', function(req, res, next) {
  res.render('user/register', { title: 'Express Blog'});
});

module.exports = router;
