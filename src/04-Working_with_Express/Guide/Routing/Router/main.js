var birds = require('./birds');
var express = require('express');
var app = express();
app.use('/birds', birds);

app.get('/', function (req, res) {
  res.send('Home Page');
});
app.listen(3000, function () {
  console.log('App listening on port 3000!');
});
