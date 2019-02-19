const express = require('express')
const route = express.Router()
const models = require('./../models/Post')

route.get('/', (req, res) => {
  models.Post.findAll()
    .then(posts => {
      res.status(200).json({
        hello: 'POSTS!',
        posts,
      })
    })
    .catch(err => console.log(err))
})

module.exports = route