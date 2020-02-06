var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

const User = require('../models/user');

router.post('/login', function(req, res) {
  const { body } = req;

  User.auth(body, function(err, result, fields) {
    console.log('body', body);
    res.send({ err, result, fields });
  });
});

module.exports = router;
