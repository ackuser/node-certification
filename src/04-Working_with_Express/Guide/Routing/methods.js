var express = require('express');
var app = express();

// GET method route
//$ curl localhost:3000/
app.get('/', function (req, res) {
  res.send('GET request to the homepage');
});

// POST method route
//$ curl -X POST localhost:3000/
app.post('/', function (req, res) {
  res.send('POST request to the homepage');
});

app.all('/secret', function (req, res, next) {
  console.log('Accessing the secret section ... ' + req.method);
  next(); // pass control to the next handler
});

//$ curl -X DELETE localhost:3000/secret
app.delete('/secret', function (req, res) {
  res.send('Got a DELETE request at /secret');
});

//$ curl -X PUT localhost:3000/secret
app.put('/secret', function (req, res) {
  res.send('Got a PUT request at /secret');
});

app.listen(3000, function () {
  console.log('App listening on port 3000!');
});
