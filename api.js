var express = require('express');

var api = express.Router();

var Image = require('./models/Image.js');
var Section = require('./models/Section.js');

api.get('/images', function(req, res) {
  Image.fetchAll().then(function(collection) {
    res.json(collection.toJSON());
  });
});

api.post('/images', function(req, res) {
  // console.log(req.body);
  // console.log(req.files);
});

api.get('/sections', function(req, res) {
  Section.fetchAll().then(function(collection) {
    res.json(collection.toJSON());
  });
});

api.post('/sections', function(req, res) {
  // console.log(req.body);
});

module.exports = api;
