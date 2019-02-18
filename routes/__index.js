const route = (app) => {
  app.use('/', require('./home'))
  app.use('/users', require('./users'))
  app.use('/posts', require('./posts'))
}

module.exports = route