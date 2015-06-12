var kumutu = require("kumutu").createClient({
  apikey: "950811591557c920a4e8465.35892782"
});

// See http://www.yelp.com/developers/documentation/v2/search_api
kumutu.search({activity: "hiking", country: "Montreal"}, function(error, data) {
  console.log(error);
  console.log(data.businesses[0].rating);
});