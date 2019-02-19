const express = require('express')
const route = express.Router()
const {Post, User} = require('../models/index')

route.get('/', (req, res) => {

  Post.findAll({
      include: [ User ]
    })
    .then(posts => {
      res.status(200).json({
        hello: 'POSTS!',
        posts,
      })
    })
    .catch(err => console.log(err))

})

route.post('/', (req, res) => {

  let {title, body, UserId, } = req.body

  let post = {
    title,
    body,
    UserId
  }

  Post.create(post)
    .then(post => {
      if(!post) {
        return Promise.reject()
      }
      res.status(200).json(post)
    }
    )
    .catch(err => console.log(err))

})

module.exports = route