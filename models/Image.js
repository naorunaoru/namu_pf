var db = require('../db.js');

var Section = require('./Section.js')

var Image = db.Model.extend({
  tableName: 'images',
  section: function() {
    return this.belongsTo(Section)
  }
});

module.exports = Image;
