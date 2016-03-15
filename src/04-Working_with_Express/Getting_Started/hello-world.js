var express = require('express');
var app = express();

// To test it open a terminal $ curl localhost:3000
app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
