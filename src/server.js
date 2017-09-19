const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Post = require('./postModels.js');

const server = express();

server.use(bodyParser.json());

server.post('/posts', (req, res) => {
  const post = new Post(req.body);
  food.save((err, newPost) => {
    if (err) return res.send(err);
    res.send(food);
  });
});

server.get('/posts', (req, res) => {
  console.log('Hello from server.get /posts route!');
  //res.send('hi\n');
  Post.find({}, (err, post) => {
    if (err) return res.send(err);
    res.json(post);
  });
});

server.put('/posts', (req, res) => {
  res.send('update');
});

server.delete('/posts/:id', (req, res) => {
  res.send('delete');
});

mongoose.connect('mongodb://localhost/steviePosts', {}, (err) => {
  if (err) return console.log(err);
  console.log('Connected to steviePosts DataBase');
});

server.listen(8080, (err) => {
  if (err) return console.log('errrr');
  console.log('Stevie Server listening on port 8080');
});

module.exports = server;