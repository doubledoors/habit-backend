var express = require('express');
var router = express.Router();
require('../models/userModel.js');
var cont = require('../controllers/userController.js');

router.get('/', cont.GET_USERS);

router.post('/create', cont.CREATE_USER);

router.post('/:userId/delete', cont.DELETE_USER);


module.exports = router;