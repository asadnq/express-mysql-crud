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
    req.session.username = result.username;
    req.session.password = result.password;
    // return res.send({ err, result, fields });
    req.session.save(() => res.redirect('/posts'));
  });
});

router.post('/logout', function(req, res) {
  req.session.destroy();
  res.redirect('/');
});

router.post('/register', function(req, res) {
  const { body } = req;

  User.create(body, () => res.redirect('/'));
});

module.exports = router;
