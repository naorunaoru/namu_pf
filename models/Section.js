var db = require('../db.js');

var Image = require('./Image.js');

var Section = db.Model.extend({
  tableName: 'sections',
  images: function() {
    return this.hasMany(Image)
  }
});

module.exports = Section;
