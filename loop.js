function syncLoop(iterations, process, exit){  
    var index = 0,
        done = false;
    var loop = {
        // Loop structure
	    next:function(){
	               if(done){
	                   if(shouldExit && exit){
	                       return exit(); // Exit if we're done
	                   }
	               }
	               // If we're not finished
	               if(index < iterations){
	                   index++; // Increment our index
				 	  request({
				 	    uri: data.businesses[0].mobile_url,
				 	  }, function(error, response, body) {
				 		  var $ = cheerio.load(body);
				 		  var list = $('.price-range');
	  
				 		  var hold = list.html().toString().length;
 
				 		  console.log(hold);
				 	  });
	               } else {
	                   done = true; // Make sure we say we're done
	                   if(exit) exit(); // Call the callback on exit
	               }
	           },
	           iteration:function(){
	               return index - 1; // Return the loop number we're on
	           },
	           break:function(end){
	               done = true; // End the loop
	               shouldExit = end; // Passing end as true means we still call the exit callback
	           }
    };
    return loop;
}