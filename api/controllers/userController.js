var mongoose = require('mongoose');
var User = mongoose.model('Users');

exports.GET_USERS = function(req, res) {
  User.find(function(err, user) {
    if (err) res.send(err);
    res.json(user);
  });
};

exports.CREATE_USER = function(req, res) {
  var newUser = new User(req.body);
  newUser.save(function(err, user) {
    if (err) res.send(err);
    res.json(user);
  })
};

exports.DELETE_USER = function(req, res) {
  var userId = req.params.userId;
  User.remove({
    _id: userId,
  }, function(err, user) {
    if (err) res.send(err);
    res.json({ message: 'user ' + userId + ' deleted'});
  });
};