module.exports = {

  database: {
    name : process.env.DB_NAME || 'ucp',
    user : process.env.DB_USER || 'dev',
    password : process.env.DB_PASSWORD || 'secret',
    options: {
      host: process.env.DB_HOST || 'localhost',
      dialect: 'postgres',
      operatorsAliases: false,

      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      },
    }
  }

}