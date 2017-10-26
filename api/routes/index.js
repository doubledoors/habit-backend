var express = require('express');
var router = express.Router();
// render index view
router.get('/', function (req, res, next) {
  res.render('index', { title: 'habit-backend' });
});

module.exports = router;