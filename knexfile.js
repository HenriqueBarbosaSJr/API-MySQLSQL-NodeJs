// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      user : 'root',
      password : '12345678',
      database : 'banco'
    },

    migrations:{
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`
    }

  },

};
