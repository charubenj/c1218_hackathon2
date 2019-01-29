class Search {
    constructor(){
        this.handleSearch = this.handleSearch.bind(this);
        this.addEventHandlers();
    }

    addEventHandlers(){
        $('#searchButton').click(this.handleSearch);
    }

    handleSearch () {
        var apiStuff = {
            url: "https://danielpaschal.com/lfzproxies/yelpproxy.php?term=brewery&location=irvine",
            method: 'get',
            dataType: 'json',
            data: {
                term: 'brewery',
                location: 'irvine'
            },
            headers: {
                apikey: 'W65fNfobJPv2Ktfhu2f6Uox1BzTMceGzBuDu6ua7PAKXGJTx1oQjCHbuYuqDvLISCsCGl_9J4BUVYJMFmPxZordWAcP13859-LOZdYHu6s4D_x2xdvLXZmBJVLRPXHYx'
            },
            success: functionCheck
        };

        function functionCheck(response) {
            $('#ajax-response').text(JSON.stringify(response.name));
        }

        $('#ajax-response').text( );
        $.ajax(apiStuff);
    }

    // handleNavBar(handleSearch){
    //
    //
    // }
}

