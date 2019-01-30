$(document).ready(initializeApp)

function initializeApp(){
    // Search
    $("#searchButton").click(function(){
        console.log ("search button was clicked ");
    });

    // Open modal on ajax response click
    $(document).on('click', '#ajax-response .response-name', clickModal);

    // Clicked star
    $(document).on('click', '.star', function( ) {
        console.log('added to favorites list!');
        var name = $('#ajax-response').text();
        // find favorite list element
        // append to the div with the response.name
        $('#favorite-list').append('<div>' + name + '</div>');
        $('h3.hidden').show();
    });

    new Search();

    // Get the modal
    var modal = document.getElementById('leftCoastModal');

    // // Get the image and insert it inside the modal - use its "alt" text as a caption
    // var img = document.getElementById('img1');
    // var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    function clickModal() {
        modal.style.display = "block";
        // leftCoastModal.src = $(this).data('src');
        captionText.innerHTML = $(this).data('alt');
    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    };
}
