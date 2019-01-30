// var url = "https://danielpaschal.com/lfzproxies/";

class Search {
    constructor(){
        this.handleSearch = this.handleSearch.bind(this);
        this.addEventHandlers();
    }

    addEventHandlers(){
        //if i click the searchButton use the handleSearch function
        //handleSearch will have the ajax call
        $('#searchButton').click(this.handleSearch);
    }

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
            //if this call is successful run the function that adds the name to the DOM
            success: addResponseData
        };

        function addResponseData(response) {
            $('#ajax-response')

            //find the ajax response element add the star image
            //return the content of response.name into the span div,and add star image inline
                .html(`<span class="response-name">${response.name}</span><img src="images/star.jpg" class="star">`)

        }

        $('#ajax-response').text( );
        $.ajax(apiStuff);

    }

}
