var request = require("request");
var cheerio = require("cheerio");
var fs = require('fs');


exports.getMoney = function(pass, iter, price)
{
	console.log("WE HERE");
  request({
	  uri: pass.businesses[iter].mobile_url,
  }, function(error, response, body) {
	  
	  
	  
	  var $ = cheerio.load(body);
	  var list = $('.price-range');
  
	  var bpdolla = list.html().toString().length;
	 
	  fs.appendFile('newtemp.html', '<div class="col-3 height-200">', function (err) {
	    if (err) throw err;
	    console.log('The thing was appended to file!');
	  });
	  fs.appendFile('newtemp.html', pass.businesses[iter].name, function (err) {
	    if (err) throw err;
	    console.log('The thing was appended to file!');
	  });
	  fs.appendFile('newtemp.html', '</div>', function (err) {
	    if (err) throw err;
	    console.log('The thing was appended to file!');
	  });
		  
	  
  });

}
