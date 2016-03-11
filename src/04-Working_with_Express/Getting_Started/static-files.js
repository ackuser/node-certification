var express = require('express');
var app = express();

//$ curl localhost:3000/public.txt
app.use(express.static(__dirname + '/public'));
//$ curl localhost:3000/file.txt
app.use(express.static(__dirname + '/files'));

//$ curl localhost:3000/static/public.txt
app.use('/static', express.static(__dirname + '/public'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
