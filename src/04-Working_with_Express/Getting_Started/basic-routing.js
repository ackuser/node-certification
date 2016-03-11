var express = require('express');
var app = express();

// To test it open a terminal $ curl localhost:3000
app.get('/', function (req, res) {
  res.send('Hello World!');
});

//$ curl -X POST localhost:3000
app.post('/', function (req, res) {
  res.send('Got a POST request');
});

//$ curl -X PUT localhost:3000/user
app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user');
});

//$ curl -X DELETE localhost:3000/user
app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
