const express = require('express');
const router = express.Router();
const {User} = require('./../models');

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.findAll()
    .then(users =>
      res.status(200).json({
        getting: 'Users',
        users
      })
    )
    .catch(err => {
      console.log(err)
    })
});

router.get('/create', (req, res) => {
  User.create({
    username: 'dushi',
    password: '123456',
    email: 'ongkiherlambang@gmail.com'
  })
  .then(user =>
    res.status(200).json({
      creating: 'User',
      user
    })
  )
  .catch(err => {
    console.log(err)
  })
})

module.exports = router;
