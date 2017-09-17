// Migration file

exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('app_servers', function(table) {
  		table.increments('id').primary();
  		table.string('_ref');
  		table.string('createdBy');
  		table.timestamp('createdTime');
  		table.string('name');
  		table.timestamp('lastConnection');
  	});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('app_servers');
};
