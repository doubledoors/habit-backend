var express = require('express');
var router = express.Router();
require('../models/userModel.js');
var cont = require('../controllers/userController.js');
// render index view
router.get('/', function (req, res, next) {
  req.flash('info', 'flash!')
  res.render('index', { title: 'habit-backend', flash: req.flash('info') });
});

router.post('/register', cont.CREATE_USER);
router.post('/login', cont.LOGIN_USER);

module.exports = router;