var express = require('express');
var router = express.Router();
const Post = require('../models/post');

router.post('/store', function(req, res) {
  Post.store(req.body, function(err, result) {
    res.redirect('/posts');
  });
});

router.get('/', function(req, res) {
  console.log('req.ression', req.session);
  Post.findAll(function(err, result) {
    const posts = result;
    res.render('post/view', { posts });
  })
})

router.get('/create', function(req, res) {
  Post.findAll(function(err, result) {
    const posts = result;
    console.log('posts findAll', posts);
    res.render('post/create', { posts });
  })
});

router.post('/store', function(req, res) {
  Post.store(req.body, function(err, result) {
    res.redirect('/posts');
  });
});

router.get('/:id', function(req, res) {
  //res.render('post/create');
  const { params } = req;
  Post.findOne(params.id, function(err, result) {
    console.log('params id', params.id)
    const post = result;
    console.log('post one', post);
    res.render('post/detail', { post });
  })
});
module.exports = router;
