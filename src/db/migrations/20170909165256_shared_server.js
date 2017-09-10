// Migration file

exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('app_servers', function(table) {
  		table.increments('id').primary();
  		//table.string('id').notNullable().unique();
  		table.string('_ref');
  		table.string('createdBy').notNullable();
  		table.timestamp('createdTime');
  		table.string('name').notNullable();
  		table.timestamp('lastConnection').notNullable();
  	});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('app_servers');
};
