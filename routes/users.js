const express = require('express');
const router = express.Router();
const { User } = require('./../models');

router.get('/', function(req, res, next) {
  User.findAll()
    .then(users => {
      res.status(200).json(users)
    })
    .catch(err => {
      console.log(err)
    })
});

router.post('/', (req, res) => {

  let {username, email, password} = req.body
  let user = {
    username,
    email,
    password
  }

  User.create(user)
    .then(user => {
      if(!user) {
        return Promise.reject()
      }
      res.status(200).json(user)
    })
    .catch(err => {
      console.log(err)
    })

})

module.exports = router;
