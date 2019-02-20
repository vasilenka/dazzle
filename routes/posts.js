const express = require('express')
const route = express.Router()
const {Post, User} = require('../models/index')

route.get('/', (req, res) => {

  Post.findAll({
      include: [ User ]
    })
    .then(posts => {
      res.status(200).json(posts)
    })
    .catch(err => console.log(err))

})

route.get('/:id', (req, res) => {

  let id = req.params.id

  Post.findByPk(id, {
      include: [ User ]
    })
    .then(post => {
      if(!post) {
        res.status(404).send()
      }
      res.status(200).json(post)
    })
    .catch(err => {
      res.status(500).send()
      console.log(err)
    })

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
    .catch(err => {
      res.status(500).json(err)
      console.log('ERROR: ', err)
    })

})

module.exports = route