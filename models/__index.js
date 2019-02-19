const Sequelize = require('sequelize')
const config = require('../config/index')

const sequelize = new Sequelize(
    config.database.name,
    config.database.user,
    config.database.password,
    config.database.options,
  )

const models = {
  User: sequelize.import('./User'),
  Post: sequelize.import('./Post'),
}

Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

sequelize.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ', err))

module.exports = models;
