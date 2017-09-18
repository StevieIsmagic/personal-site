const express = require('express');
const bodyParser = require('body-parser');
// const server = require('./server');
const mongoose = require('mongoose');

const server = express();

server.use(bodyParser.json());

server.post('/posts', (req, res) => {
  res.send('create');
});

server.get('/posts', (req, res) => {
  res.send('read');
});

server.put('/posts', (req, res) => {
  res.send('update');
});

server.delete('/posts/:id', (req, res) => {
  res.send('delete');
});

mongoose.connect('mongodb://localhost/steviePosts', {}, (err) => {
  if (err) return console.log(err);
  console.log('connected to steviePosts DB');
});

server.listen(8080, () => {
  console.log('stevie server listening on port 8080');
});