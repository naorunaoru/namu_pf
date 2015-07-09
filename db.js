var ENV = process.env.NODE_ENV || 'development';

var knexfile = require('./knexfile.js');

var knex = require('knex')(knexfile[ENV]);

var bookshelf = require('bookshelf')(knex);

module.exports = bookshelf;
