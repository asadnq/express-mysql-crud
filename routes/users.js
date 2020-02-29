var express = require('express');
var router = express.Router();
const crypto = require('crypto');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

const User = require('../models/user');
const secret = 'abcdefg';

router.post('/login', function(req, res) {
  const { body } = req;

  const hash = crypto.createHmac('sha256', secret)
                   .update(body.password)
                   .digest('hex');

  User.auth({...body, password: hash}, function(err, result, fields) {
    if (err) throw err;
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

  const hash = crypto.createHmac('sha256', secret)
                   .update(body.password)
                   .digest('hex');

  User.create({...body, password: hash}, (err, result) => {
    if (err) throw err;
    res.redirect('/')
  });
});

module.exports = router;
