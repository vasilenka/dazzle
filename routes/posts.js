const express = require('express')
const route = express.Router()
const {Post} = require('../models/index')

route.get('/', (req, res) => {
  Post.findAll()
    .then(posts => {
      res.status(200).json({
        hello: 'POSTS!',
        posts,
      })
    })
    .catch(err => console.log(err))
})

route.get('/create', (req, res) => {
  Post.create({
    title: 'hello world',
    body: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    UserId: 1
  })
  .then(post => {
    Post.findAll()
      .then(posts => res.status(200).json(posts))
      .catch(err => Promise.reject())
  }
  )
  .catch(err => console.log(err))
})

module.exports = route