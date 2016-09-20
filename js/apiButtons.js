

//--------------------------
//#boilModal
//--------------------------

var type = 'bbcnews';
    var queryURL = "https://newsapi.org/v1/articles?source=" + type + "&apiKey=6815c9752550479f9968e6f04c64e532";



    $.ajax({
            url: queryURL,
            method: 'GET'
        })
        .done(function(response) {
            console.log(response);

            // Example Movie
            var firstRowTds = $('table').children().eq(1).children('tr').eq(1).children('td');

            firstRowTds.eq(0).text(response.articles[0].title);

            firstRowTds.eq(1).text(response.articles[0].description);

            firstRowTds.eq(2).text(response.articles[0].urlToImage);

        });


//############################################################################################################
// 15 Sec Giphy Modal Buttons
//#############################################################################################################
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

    var queryUrl = "http://api.giphy.com/v1/stickers/search?q=cat&api_key=dc6zaTOxFJmzC&Limit=4";
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

$('#gifButton3').on('click',function(){
    var x = $(this).data("search");
    console.log(x);

    var queryUrl = "http://api.giphy.com/v1/stickers/search?q=dog&api_key=dc6zaTOxFJmzC&Limit=4";
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
