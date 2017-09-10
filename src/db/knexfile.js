// Update with your config settings.

module.exports = {
  test: {
    client: 'postgresql',
    connection: 'postgres://postgres:postgres@localhost:5432/shared_server_test',
  },

  development: {
    client: 'postgresql',
    connection: 'postgres://postgres:postgres@localhost:5432/shared_server',
    migrations: {
      directory: __dirname + '/migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL + '?ssl=true',
    migrations: {
      directory: __dirname + '/migrations'
    }
  }

};
