var yelp = require("yelp").createClient({
  consumer_key: "YhjLxF8PRpOolMd0SNxeiQ", 
  consumer_secret: "u9zEdttC6F-WKn51nZmmkuJjv7s",
  token: "iiZ2k4vhot8_gNcg0K-imNd3uW0KYezh",
  token_secret: "beFGWWMJ-ASRsHUmqt40MBeLXYA"
});

// See http://www.yelp.com/developers/documentation/v2/search_api
yelp.search({term: "bars", location: "Montreal", limit: 3, sort: 2}, function(error, data) {
var items = [
	data.businesses[0].name,
	data.businesses[1].name,
	data.businesses[2].name
]
});

yelp.display(), function(){
	console.log(data.businesses[0].name);
}

