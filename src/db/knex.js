var environment = process.env.NODE_ENV || 'development';
var config = require(__dirname + '/knexfile');
var knex = require('knex')(config[environment]);
var logger = require('./../logger');

module.exports = knex;

if (environment != 'test') {
	logger.debug("Migrating");
	knex.migrate.latest([config]);
}
