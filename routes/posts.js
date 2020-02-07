var express = require('express');
var router = express.Router();
const Post = require('../models/post');

router.post('/create', async function(req, res) {
  Post.create(req.body, function(err, result) {
    res.send({err, result});
  });
});

module.exports = router;