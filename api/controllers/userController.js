var mongoose = require('mongoose');
var User = mongoose.model('Users');

exports.getUsers = function(req, res) {
  User.find({}, function(err, users) {
    if (err) return console.error(err);
    res.json(users);
  });
};

exports.createUser = function(req, res) {
  var newUser = new User(req.body);
  newUser.save(function(err, user) {
    if (err) return console.error(err);
    res.json(user);
  });
};