var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.use(express.static(__dirname + '/public'));




app.post('/myaction', function(req, res) {
    var memail = req.body.ownEmail;
	var cemail = req.body.coEmail;
	var type = req.body.trip;
	
	console.log(memail);
	console.log(cemail);
	console.log(type);
	
	res.sendFile(__dirname + '/public/planner.html');
	
});


app.listen(process.env.PORT || 3000);

console.log("Running at Port 3000");