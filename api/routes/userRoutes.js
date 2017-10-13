module.exports = function(app) {
  var user = require('../controllers/userController');

  app.route('/users')
    .get(user.getUsers);

  app.route('/create')
    .post(user.createUser);
}