var express = require('express');
var app = express();

//$ curl localhost:3000/public.txt
app.use(express.static('public'));
//$ curl localhost:3000/file.txt
app.use(express.static('files'));

//$ curl localhost:3000/static/public.txt
app.use('/static', express.static('public'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
