
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('images', function(table) {
      table.integer('section_id').references('sections.id');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('images', function(table) {
      table.dropColumn('section_id');
    })
  ]);
};
