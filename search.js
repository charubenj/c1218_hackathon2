// var url = "https://danielpaschal.com/lfzproxies/";


class Search {
    constructor(){
        this.handleSearch = this.handleSearch.bind(this);
        this.addEventHandlers();
    }

    addEventHandlers(){
        $('#searchButton').click(this.handleSearch);
        // $('img').attr('images/leftcoast.jpg');
    }

    handleSearch () {
        var apiStuff = {
            url: 'https://www.zomato.com/orange-county/drinks-and-nightlife-in-irvine',
            // url: "https://danielpaschal.com/lfzproxies/yelpproxy.php?term=brewery&location=irvine",
            method: 'get',
            dataType: 'json',
            data: {
                term: 'brewery',
                location: 'irvine'
            },
            headers: {
                apikey: '91cde05bc82f232037d522030640b69a'
                // apikey: 'W65fNfobJPv2Ktfhu2f6Uox1BzTMceGzBuDu6ua7PAKXGJTx1oQjCHbuYuqDvLISCsCGl_9J4BUVYJMFmPxZordWAcP13859-LOZdYHu6s4D_x2xdvLXZmBJVLRPXHYx'
            },
            success: functionCheck
        };

        function functionCheck(response) {
            console.log(response);
            $('#ajax-response').text(JSON.stringify(response));
        }

        $('#ajax-response').text( );
        $.ajax(apiStuff);

    }



    // handleNavBar(handleSearch){
    //
    //
    // }
}

