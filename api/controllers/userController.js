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

exports.LOGIN_USER = function (req, res) {
  User.findOne({
    username: req.body.username
  }, function(err, user) {
    if (err) res.send(err);
    if (!user) {
      res.send('user not found')
    } else {
      if (user.password === req.body.password) {
        res.send('pass OK, redirect to login')
      } else {
        res.send('incorrect pass')
      }
    }
  });
};