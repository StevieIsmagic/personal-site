const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Post = require('./postModels.js');
const cors = require('cors');

const server = express();

server.use(bodyParser.json());
//server.use(bodyParser.urlencoded({ extended: false }));

const corsOptions = {
  "origin": "http://localhost:3000",
  "methods": "GET, HEAD, PUT, PATCH, POST, DELETE",
  "preflightContinue": true,
  "optionsSuccessStatus": 204,
  "credentials": true // enable set cookie
};
//server.use(cors(corsOptions));

server.post('/posts', (req, res) => {
  const { title, content } = req.body;
  const post = new Post({title, content});
  post.save((err, newPost) => {
    if (err) return res.send(err);
    res.json(newPost);
  });
});

server.get('/posts', (req, res) => {
  console.log('Hello from server.get /posts route!');
  //res.send('hi\n');
  Post.find({}, (err, post) => {
    console.log(post);
    if (err) return res.send(err);
    res.json(post);
  });
});

server.put('/posts', (req, res) => {
   const postID = req.body.id;
   Post.find(postID, (err, post) => {
     if(err) return res.send(err);
     post.title = req.body.title;
     post.content = req.body.content;
     post.save((err) => {
       if (err) return res.send(err);
       res.json({message: 'Post was updated, Steven!'});
     });
   });
});

server.delete('/posts/:id', (req, res) => {
  res.send('delete');
});

mongoose.connect('mongodb://localhost/postsTest', {useMongoClient: true}, (err) => {
  if (err) return console.log(err);
  console.log('Connected to steviePosts DataBase');
});

server.listen(8080, (err) => {
  if (err) return console.log('errrr');
  console.log('Stevie Server listening on port 8080');
});
