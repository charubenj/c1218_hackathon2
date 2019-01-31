class Search {
    constructor(){
        //don't forget to bind
        this.handleSearch = this.handleSearch.bind(this);
        this.addEventHandlers();
    }

    //need to turn on clicks for the buttons
    addEventHandlers(){
        //if i click the searchButton use the handleSearch function
        //handleSearch will have the ajax call
        $('#searchButton').click(this.handleSearch);
    }

    //need code to handle API call and grab data from the response
    handleSearch () {
        var apiStuff = {
            url: "https://danielpaschal.com/lfzproxies/yelpproxy.php?term=restaurant&location=irvine",
            method: 'get',
            dataType: 'json',
            data: {
                term: 'brewery',
                location: 'irvine'
            },
            headers: {
                apikey: 'W65fNfobJPv2Ktfhu2f6Uox1BzTMceGzBuDu6ua7PAKXGJTx1oQjCHbuYuqDvLISCsCGl_9J4BUVYJMFmPxZordWAcP13859-LOZdYHu6s4D_x2xdvLXZmBJVLRPXHYx'
            },
            //if this call is successful, run the function that adds the name from the object to the container in the  DOM
            success: addResponseData
        };

        //need function that adds the information grabbed from API to a div
        //this div should be called the favorite container
        function addResponseData(response) {
            $('#ajax-response')
            //find the ajax-response element
            //return the content of response.name into the span div,and add star image inline
                .html(`<span class="response-name">${response.name}</span><img src="images/graystar.jpg" class="star">`)

        }

        // $('#ajax-response').text( );
        //ajax call that the handleSearch
        $.ajax(apiStuff);

    }
    // $(".star").attr('src', "images/star.jpg");

    // function changeStartColor() {
    //     var starPicture = document.getElementById("img");
    //     if (starPicture.style.display === "none") {
    //         starPicture.style.display = "block";
    //     } else {
    //         starPicture.style.display = "none";
    //     }
    // }

}
