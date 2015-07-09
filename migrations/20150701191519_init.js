
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('images', function(table) {
      table.increments();

      table.string('name');
      table.string('description');

      table.integer('sort');

      table.string('full_path');
      table.string('thumb_path');
    }),

    knex.schema.createTable('sections', function(table) {
      table.increments();

      table.string('name');
      table.string('description');

      table.integer('sort');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('images'),
    knex.schema.dropTable('sections')
  ]);
};
