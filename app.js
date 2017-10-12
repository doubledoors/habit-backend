const express = require('express');
const app = express();

const PORT = 3333;

app.get('/', function(req, res) {
  res.send('hello world');
});

app.listen(PORT, function() {
  console.log('listening on port', PORT);
});