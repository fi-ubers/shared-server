
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('statistics', function(table) {
	  	table.integer('id').primary();
	  	table.integer('requests').defaultTo(0);
		table.integer('userCreate').defaultTo(0);
	 	table.integer('userDelete').defaultTo(0);
	  	table.integer('carCreate').defaultTo(0);
	  	table.integer('carDelete').defaultTo(0);
	  	table.integer('tripCreate').defaultTo(0);
	  	table.foreign('id').references('app_servers.id').onDelete('cascade');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('statistics');
};
