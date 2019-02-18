const Sequelize = require('sequelize')

const dbName = process.env.DB_NAME || 'ucp'
const dbUser = process.env.DB_USER || 'dev'
const dbPwd = process.env.DB_PASSWORD || 'secret'
const dbHost = process.env.DB_HOST || 'localhost'

const dbConfig = {
  host: dbHost,
  dialect: 'postgres',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
}

const db = new Sequelize(dbName, dbUser, dbPwd, dbConfig)

db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ', err))

module.exports = db