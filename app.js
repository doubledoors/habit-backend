const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
// import routes
const index = require('./routes/index');
const users = require('./routes/users');
// g0
const app = express();
// cfg
const PORT = 3333;

// mongodb
mongoose.connect('mongodb://127.0.0.1:27017', {
  useMongoClient: true,
});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection err'));
db.once('open', function() {
  console.log('mongoose open')
});

// view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// routes
app.use('/', index);
app.use('/users', users);

// app.get('/', function(req, res) {
//   res.send('hello world');
// });

app.listen(PORT, function() {
  console.log('listening on port', PORT);
});
