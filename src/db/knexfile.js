// Update with your config settings.

module.exports = {
  test: {
    client: 'postgresql',
    connection: 'postgres://postgres@localhost:5432/shared_server_test',
    migrations: {
      directory: __dirname + '/migrations'
    },
    seeds: {
      directory: __dirname + '/seeds/test'
    }
  },

  development: {
    client: 'postgresql',
    connection: 'postgres://postgres:postgres@localhost:5432/shared_server',
    migrations: {
      directory: __dirname + '/migrations'
    },
    seeds: {
      directory: __dirname + '/seeds/development'
    }
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL + '?ssl=true',
    migrations: {
      directory: __dirname + '/migrations'
    },
    seeds: {
      directory: __dirname + '/seeds/production'
    }
  }

};
