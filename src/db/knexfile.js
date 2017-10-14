// Update with your config settings.
require('dotenv').config();
var dev_database = process.env.DEV_DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/shared_server';

module.exports = {
  test: {
    client: 'postgresql',
    connection: 'postgres://postgres@localhost:5432/shared_server_test',
    migrations: {
      directory: __dirname + '/migrations/test'
    },
    seeds: {
      directory: __dirname + '/seeds/test'
    }
  },

  development: {
    client: 'postgresql',
    connection: dev_database,
    migrations: {
      directory: __dirname + '/migrations/development'
    },
    seeds: {
      directory: __dirname + '/seeds/development'
    }
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL + '?ssl=true',
    migrations: {
      directory: __dirname + '/migrations/production'
    },
    seeds: {
      directory: __dirname + '/seeds/production'
    }
  }

};
