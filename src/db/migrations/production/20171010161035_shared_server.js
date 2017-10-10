
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
	  		table.string('username');
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
	  		table.string('username');
	  		table.string('password');
	  		table.specificType('fb', 'json');
	  		table.string('name');
	  		table.string('surname');
	  		table.string('country');
	  		table.string('email');
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
	  }),
	  
	  knex.schema.createTableIfNotExists('cars', function(table) {
	  		table.increments('id').primary();
	  		table.string('_ref');
	  		table.string('owner');
	  		table.specificType('properties', 'json[]');
	  }),
	  
	  knex.schema.createTableIfNotExists('transactions', function(table) {
	  		table.integer('id');
	  		table.string('trip');
	  		table.timestamp('timestamp');
	  		table.specificType('cost', 'json');
	  		table.string('description');
	  		table.specificType('data', 'json');
	  		table.primary(['id', 'timestamp']);
	  })
	  
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTableIfExists('app_servers'),
        knex.schema.dropTableIfExists('business_users'),
        knex.schema.dropTableIfExists('application_users'),
        knex.schema.dropTableIfExists('blacklist'),
        knex.schema.dropTableIfExists('app_tokens'),
        knex.schema.dropTableIfExists('cars'),
        knex.schema.dropTableIfExists('transactions')
    ])
};
