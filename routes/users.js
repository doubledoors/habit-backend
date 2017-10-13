const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.json([
    {
      id: 1,
      username: 'one',
    },
    {
      id: 2,
      username: 'two',
    },
  ]);
});

module.exports = router;