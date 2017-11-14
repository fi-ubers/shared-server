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
    }
  },

  production: {
    client: 'postgresql',
    connection: 'postgres://udivnwonhaaoem:5c055f1fa9f8d5f9273904625f1126865902047ae46a4bb0841200bd6d3c3d72@ec2-107-20-193-89.compute-1.amazonaws.com:5432/dfdidieplcj3ne?ssl=true',
    migrations: {
      directory: __dirname + '/migrations/production'
    },
    seeds: {
      directory: __dirname + '/seeds/production'
    }
  }

};
