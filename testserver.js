var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.use(express.static(__dirname + '/public'));

var count = 0;
var price1;
var price2;
var loc;

var yelp = require("yelp").createClient({
  consumer_key: "YhjLxF8PRpOolMd0SNxeiQ", 
  consumer_secret: "u9zEdttC6F-WKn51nZmmkuJjv7s",
  token: "iiZ2k4vhot8_gNcg0K-imNd3uW0KYezh",
  token_secret: "beFGWWMJ-ASRsHUmqt40MBeLXYA"
});

var fs = require('fs');

app.post('/myaction', function(req, res) {
    var loc = req.body.local;
	
	
	res.sendFile(__dirname + '/public/planner.html');
	
});


app.post('/datapush', function(req, res) {
  
	
	count ++;
	
	if(count != 2)	
	{
		res.sendFile(__dirname + '/public/thanks.html');
		price1 = req.body.money;
	}
	else
	{
		price2 = req.body.money;
		
		price = (price1+price2)/2;
		
		yelp.search({term: "food", location: "Montreal", limit: 1}, function(error, data) {

		  fs.createReadStream('template.html').pipe(fs.createWriteStream('newtemp.html'));

  
		  var arrayLength = data.businesses.length;
		  for (var i = 0; i < arrayLength; i++) {
	  
			  var hold = require ("./parse.js");
	  
			  hold.getMoney(data, i, price)
	  
		  }
		  });
		
		
	}

	
});


app.listen(process.env.PORT || 3000);

console.log("Running at Port 3000");