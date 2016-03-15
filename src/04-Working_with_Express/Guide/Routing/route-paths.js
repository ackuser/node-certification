var express = require('express');
var app = express();

//$ curl localhost:3000/
app.get('/', function (req, res) {
  res.send('root');
});

//$ curl localhost:3000/about
app.get('/about', function (req, res) {
  res.send('about');
});

//$ curl localhost:3000/random.text
app.get('/random.text', function (req, res) {
  res.send('random.text');
});

//$ curl localhost:3000/aabc
app.get(/aa/, function(req, res) {
  res.send('/aa/');
});

//$ curl localhost:3000/ab
app.get('/ab+cd', function(req, res) {
  res.send('ab+cd');
});

//$ curl localhost:3000/cd
app.get('/ab?cd', function(req, res) {
  res.send('ab?cd');
});

//$ curl localhost:3000/abe
app.get('/ab(cd)?e', function(req, res) {
 res.send('ab(cd)?e');
});

//$ curl localhost:3000/fly
app.get(/.*fly$/, function(req, res) {
  res.send('/.*fly$/');
});

app.listen(3000, function () {
  console.log('App listening on port 3000!');
});
