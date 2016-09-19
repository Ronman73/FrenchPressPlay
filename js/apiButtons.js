//API buttons
$('#gifButton1').on('click',function(){
	var x = $(this).data("search");
	console.log(x);

	var queryUrl = "http://api.giphy.com/v1/stickers/trending?api_key=dc6zaTOxFJmzC&Limit=4";
            console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
            console.log("queryUrl: " + queryUrl);
            console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
     $.ajax({url:queryUrl,method: 'GET'})
     		.done(function(response) {
     			 for (var i=0; i < response.data.length; i++) {
                console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
                console.log(response);
                console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
                $('#gifWell').append("<img src= '" +response.data[i].images.fixed_width.url+ "'p>");
            	  }
            })
                // var stuff = "";
})

$('#gifButton2').on('click',function(){
	var x = $(this).data("search");
	console.log(x);

	var queryUrl = "http://api.giphy.com/v1/stickers/random?api_key=dc6zaTOxFJmzC&tag=oops&Limit=4";
            console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
            console.log("queryUrl: " + queryUrl);
            console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
     $.ajax({url:queryUrl,method: 'GET'})
     		.done(function(response) {
     			 for (var i=0; i < response.data.length; i++) {
                console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
                console.log(response);
                console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
                $('#gifWell').append("<img src= '" +response.data[i].images.fixed_width.url+ "'p>");
            	  }
            })
                // var stuff = "";
})




