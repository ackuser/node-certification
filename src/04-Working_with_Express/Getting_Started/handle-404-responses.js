var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.use(function(req, res, next) {
  res.status(404).send('Sorry cant find that!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

// To test it open a terminal
//$ curl localhost:3000
//$ curl localhost:3000/
//$ curl localhost:3000/putsomethinghere
