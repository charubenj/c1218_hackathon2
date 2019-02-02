$(document).ready(initializeApp)

function initializeApp(){
    // Search
    $("#searchButton").click(function(){
        console.log ("search button was clicked ");
    });

    // Open modal on ajax response click
    $(document).on('click', '.response-name', clickModal);
    console.log('clicked text from ajax call');

    //click star run
    $(document).on('click', '.star', function() {
        console.log('added to favorites list!');
        var name = $('#ajax-response').text();
        // find favorite list element
        // append to the div with the response.name
        $('#favorite-list').append('<div>' + name + '</div>');
        $('h3.favoriteListContainer').show();
    });

    //created a new instance of search to use methods from the search class
    new Search();

    // Get the modal
    var modal = document.getElementById('leftCoastModal');

    // // Get the image and insert it inside the modal - use its "alt" text as a caption
    // var img = document.getElementById('img1');
    // var modalImg = document.getElementById("img01");
    // var captionText = document.getElementById("caption");

    function clickModal() {
        console.log('clicked modal');
        modal.style.display = "block";
        //incase image that doesn't work
        captionText.innerHTML = $(this).data('alt');
    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    };
}
