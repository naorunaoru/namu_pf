var express = require('express');

var admin = express.Router();

admin.get('/', function(req, res) {
  res.send('admin!!');
});

module.exports = admin;
