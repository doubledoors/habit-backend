var mongoose = require('mongoose');
var User = mongoose.model('Users');
var bcrypt = require('bcrypt');

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
      var plainTxt = req.body.password;
      var hash = user.password;
      bcrypt.compare(plainTxt, hash, function(err, compareResult) {
        if (compareResult === true) {
          res.send('PASS OK checked vs hash');
        } else {
          res.send('incorrect pass vs hash');
        }
      });
    }
  });
};