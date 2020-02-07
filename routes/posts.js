var express = require('express');
var router = express.Router();
const Post = require('../models/post');

router.post('/create', async function(req, res) {
  const post = await Post.create(req.body);
  res.send(post);
});

const findAll = async (req, res) => {
  const posts = await Post.findAll();

  res.send(posts);
}
router.get('/', findAll);
module.exports = router;