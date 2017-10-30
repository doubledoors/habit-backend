var express = require('express');
var router = express.Router();
require('../models/userModel.js');
var cont = require('../controllers/userController.js');

router.get('/', function (req, res, next) {
  var username = req.session.username;
  req.flash('info', 'flasherino!', JSON.stringify(req.session, null, 2))
  res.render('profile', {
    title: 'user profile',
    username: username,
    flash: req.flash('info')
  });
});

module.exports = router;