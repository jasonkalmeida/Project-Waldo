var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.use(express.static(__dirname + '/public'));




app.post('/myaction', function(req, res) {
    var name = req.body.ownEmail;

	console.log(name);
});


app.listen(process.env.PORT || 3000);

console.log("Running at Port 3000");