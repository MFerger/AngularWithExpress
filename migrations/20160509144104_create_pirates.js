
exports.up = function(knex, Promise) {
  return knex.schema.createTable('pirates', function (table) {
    table.string('name').notNullable();
    table.string('poison').notNullable();
    table.string('accessory').notNullable();
    });
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('pirates');
};
