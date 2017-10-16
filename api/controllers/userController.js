var mongoose = require('mongoose');
var User = mongoose.model('Users');

exports.GET_USERS = function(req, res) {
  res.send('GET_USERS');
};

exports.CREATE_USER = function(req, res) {
  res.send('CREATE_USER');
};

exports.DELETE_USER = function(req, res) {
  res.send('DELETE_USER');
};