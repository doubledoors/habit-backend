var express = require('express');
var router = express.Router();
require('../models/userModel.js');
var cont = require('../controllers/userController.js');

router.get('/', cont.GET_USERS);

router.post('/:userId/delete', cont.DELETE_USER);

module.exports = router;