var express = require('express');
var path = require('path'); 

var app = express();
app.get('/public');
app.use(express.static(__dirname + '/static'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
})

app.listen(3000);

console.log("Running at Port 3000");