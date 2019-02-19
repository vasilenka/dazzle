module.exports = {
  development: {
    username: 'dev',
    password: 'secret',
    database: 'dazzle-dev',
    host: '127.0.0.1',
    dialect: "postgres",
    operatorsAliases: false,
    logging: false,
  },
  test: {
    username: 'dev',
    password: 'secret',
    database: 'dazzle-test',
    host: '127.0.0.1',
    dialect: "postgres",
    operatorsAliases: false,
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    dialect: 'postgres',
    use_env_variable: 'DATABASE_URL',
    operatorsAliases: false,
  }
};
