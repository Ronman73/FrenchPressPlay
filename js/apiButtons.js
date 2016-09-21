//#############################################################################################################
//Page Load Modal
$(window).load(function(){
        $('#myModal1').modal('show');
    });

//#############################################################################################################
//#boilModal ========  NEWS API
//############################################################################################################
// Initial array of news options
    var movies = ['bbcnews', 'buzzfeed', 'espn', 'mashable'];

    // ========================================================

    // displayNewsInfo function now re-renders the HTML to display the appropriate content. 
    function displayNewsInfo(){

        var news1 = $(this).attr('data-name');
        var queryURL = "https://newsapi.org/v1/articles?source=" + news1 + "&apiKey=6815c9752550479f9968e6f04c64e532";
        
        // Creates AJAX call for the specific news being 
        $.ajax({url: queryURL, method: 'GET'}).done(function(response) {

            // Creates a generic div to hold the news
            var newsDiv = $('<div class="news">');

            // Retrieves the title Data
            var title = response.articles[0].title;

            // Creates an element to have the title displayed
            var pOne = $('<p>').text( "" + title);

            // Displays the title
            newsDiv.append(pOne);

            // Retrieves the publish time
            var released = response.articles[0].publishedAt;

            // Creates an element to hold the release date
            var pTwo = $('<p>').text( "" + released);

            // Displays the release date
            newsDiv.append(pTwo);

            // Retrieves the discription
            var discription = response.articles[0].description;

            // Creates an element to hold the discription
            var pThree = $('<p>').text( "" + discription);

            // Appends the discription
            newsDiv.append(pThree);

            // Creates an element to hold the image 
            var image = $('<img>').attr("src", response.articles[0].urlToImage);

            // Appends the image
            newsDiv.append(image);

            // Puts the entire Movie above the previous movies.
            $('#newsView').prepend(newsDiv);
        });

    }

    // ========================================================
        // Generic function for displaying the movieInfo
    $(document).on('click', '.news', displayNewsInfo);


    // ========================================================

    // This calls the renderButtons() function
    renderButtons();

    // Generic function for displaying movie data 
    function renderButtons(){ 

        // Deletes the movies prior to adding new movies (this is necessary otherwise you will have repeat buttons)
        $('#buttonsView').empty();

        // Loops through the array of movies
        for (var i = 0; i < movies.length; i++){

            // Then dynamicaly generates buttons for each movie in the array

            // Note the jQUery syntax here... 
            var a = $('<button>') // This code $('<button>') is all jQuery needs to create the beginning and end tag. (<button></button>)
            a.addClass('news'); // Added a class 
            a.attr('data-name', movies[i]); // Added a data-attribute
            a.text(movies[i]); // Provided the initial button text
            $('#buttonsView').append(a); // Added the button to the HTML
        }
    }

    // ========================================================

    // This function handles events where one button is clicked
    $('#addMovie').on('click', function(){

        // This line of code will grab the input from the textbox
        var movie = $('#movie-input').val().trim();

        // The movie from the textbox is then added to our array
        movies.push(movie);
        
        // Our array then runs which handles the processing of our movie array
        renderButtons();

        // We have this line so that users can hit "enter" instead of clicking on ht button and it won't move to the next page
        return false;
    })



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





