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
    connection: 'postgres://udivnwonhaaoem:5c055f1fa9f8d5f9273904625f1126865902047ae46a4bb0841200bd6d3c3d72@ec2-107-20-193-89.compute-1.amazonaws.com:5432/dfdidieplcj3ne?ssl=true',
    migrations: {
      directory: __dirname + '/migrations'
    }
  }

};
