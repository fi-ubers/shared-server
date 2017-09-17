var environment = process.env.NODE_ENV || 'development';
var config = require(__dirname + '/knexfile')[environment];

module.exports = require('knex')(config);
