var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var userRoutes = require('./api/routes/userRoutes');
var indexRoutes = require('./api/routes/index');
var app = express();
var PORT = 3333;

mongoose.connect('mongodb://127.0.0.1:27017', {
  useMongoClient: true,
});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection err'));
db.once('open', function() {
  console.log('mongoose open')
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/', indexRoutes);
app.use('/users', userRoutes);

app.listen(PORT, function() {
  console.log('listening on port', PORT);
});
