var express = require('express');
var app = express();

var admin = require('./admin.js');
var api = require('./api.js');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

var busboyBodyParser = require('busboy-body-parser');
app.use(busboyBodyParser());

var busboy = require('connect-busboy');
app.use(busboy());

app.use('/admin', admin);
app.use('/api', api);

module.exports = app;
