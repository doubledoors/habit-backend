var express = require('express');
var router = express.Router();
// render index view
router.get('/', function (req, res, next) {
  req.flash('info', 'flash!')
  res.render('index', { title: 'habit-backend', flash: req.flash('info') });
});

module.exports = router;