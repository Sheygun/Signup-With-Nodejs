var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/schema')
let bcrypt = require('bcrypt');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/signup', function(req, res) {
  res.render('signup', { title: 'Express' });
});

router.post('/signup', function(req, res, next) {
  res.render('signup');

    console.log(req.body);
  let lists = {
    firstName: req.body.first,
    lastName: req.body.last,
    emails: req.body.email,
    // passwords: req.body.password,
    numbers: req.body.number
  }
  let data = new User(lists);
  data.passwords = data.generateHash(req.body.password);
    data.save();


  res.redirect('/');
});
module.exports = router;
