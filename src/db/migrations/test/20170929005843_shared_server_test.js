
exports.up = function(knex, Promise) {
	return Promise.all([
    
	  knex.schema.createTableIfNotExists('app_servers', function(table) {
	  		table.increments('id').primary();
	  		table.string('_ref');
	  		table.string('createdBy');
	  		table.timestamp('createdTime').defaultTo(knex.fn.now());
	  		table.string('name');
	  		table.timestamp('lastConnection');
	  }),
	  
	  knex.schema.createTableIfNotExists('business_users', function(table) {
	  		table.increments('id').primary();
	  		table.string('_ref');
	  		table.string('username').unique();
	  		table.string('password');
	  		table.string('name');
	  		table.string('surname');
	  		table.specificType('roles', 'text[]');
	  }),
	  
	  knex.schema.createTableIfNotExists('application_users', function(table) {
	  		table.increments('id').primary();
	  		table.string('_ref');
	  		table.string('applicationOwner');
	  		table.string('type');
	  		table.specificType('cars', 'json[]');
	  		table.string('username').unique();
	  		table.string('password');
	  		table.specificType('fb', 'json');
	  		table.string('name');
	  		table.string('surname');
	  		table.string('country');
	  		table.string('email').unique();
	  		table.string('birthdate');
	  		table.specificType('images', 'text[]');
	  		table.specificType('balance', 'json[]');
	  }),
	  
	  knex.schema.createTableIfNotExists('blacklist', function(table) {
	  		table.string('jti').primary();
	  }),
	  
	  knex.schema.createTableIfNotExists('app_tokens', function(table) {
	  		table.integer('id').primary();
	  		table.string('token');
	  		table.foreign('id').references('app_servers.id').onDelete('cascade');
	  }),
	  
	  knex.schema.createTableIfNotExists('statistics', function(table) {
	  		table.integer('id').primary();
	  		table.integer('requests').defaultTo(0);
	  		table.integer('userCreate').defaultTo(0);
	  		table.integer('userDelete').defaultTo(0);
	  		table.integer('carCreate').defaultTo(0);
	  		table.integer('carDelete').defaultTo(0);
	  		table.integer('tripCreate').defaultTo(0);
	  		table.foreign('id').references('app_servers.id').onDelete('cascade');
	  }),
	  
	  knex.schema.createTableIfNotExists('cars', function(table) {
	  		table.increments('id').primary();
	  		table.string('_ref');
	  		table.integer('owner');
	  		table.specificType('properties', 'json[]');
	  		table.foreign('owner').references('application_users.id').onDelete('cascade');
	  }),
	  
	  knex.schema.createTableIfNotExists('trips', function(table) {
	  		table.increments('id').primary();
	  		table.string('applicationOwner');
	  		table.integer('driver');
	  		table.integer('passenger');
	  		table.specificType('start', 'json');
	  		table.specificType('end', 'json');
	  		table.integer('totalTime');
	  		table.integer('waitTime');
	  		table.integer('travelTime');
	  		table.integer('distance');
	  		table.specificType('route', 'json[]');
	  		table.specificType('cost', 'json');
	  		table.specificType('paymethod', 'json');
	  		table.foreign('driver').references('application_users.id').onDelete('cascade');
	  		table.foreign('passenger').references('application_users.id').onDelete('cascade');
	  }),
	  
	  knex.schema.createTableIfNotExists('transactions', function(table) {
	  		table.increments('id').primary();
	  		table.integer('trip');
	  		table.timestamp('timestamp');
	  		table.specificType('cost', 'json');
	  		table.string('description');
	  		table.specificType('data', 'json');
	  		table.integer('user');
	  		table.foreign('user').references('application_users.id').onDelete('cascade');
	  		//table.foreign('trip').references('trips.id').onDelete('cascade');
	  }),
	  
	  knex.schema.createTableIfNotExists('rules', function(table) {
	  		table.increments('id').primary();
	  		table.string('_ref');
	  		table.string('language');
	  		table.specificType('lastCommit', 'json');
	  		table.text('blob');
	  		table.boolean('active');
	  }),
	  
	  knex.schema.createTableIfNotExists('commits', function(table) {
	  		table.increments('id').primary();
	  		table.specificType('rule', 'json');
	  		table.integer('ruleId');
	  		table.foreign('ruleId').references('rules.id').onDelete('cascade');
	  })
	])
};

exports.down = function(knex, Promise) {
	return Promise.all([
		knex.schema.dropTableIfExists('app_tokens'),
		knex.schema.dropTableIfExists('statistics'),
		knex.schema.dropTableIfExists('app_servers'),
		knex.schema.dropTableIfExists('business_users'),
		knex.schema.dropTableIfExists('cars'),
		knex.schema.dropTableIfExists('transactions'),
		knex.schema.dropTableIfExists('trips'),
		knex.schema.dropTableIfExists('application_users'),
		knex.schema.dropTableIfExists('blacklist'),
		knex.schema.dropTableIfExists('commits'),
		knex.schema.dropTableIfExists('rules')
	])
};
