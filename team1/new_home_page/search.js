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
            url: "https://danielpaschal.com/lfzproxies/yelpproxy.php",
            method: 'get',
            dataType: 'json',
            data: {
                term: $(".searchInput").val() || 'brewery',// passed dynamic value if enter value then show result or bydefault show brewery
                location: 'irvine'
            },
            headers: {
                apikey: 'W65fNfobJPv2Ktfhu2f6Uox1BzTMceGzBuDu6ua7PAKXGJTx1oQjCHbuYuqDvLISCsCGl_9J4BUVYJMFmPxZordWAcP13859-LOZdYHu6s4D_x2xdvLXZmBJVLRPXHYx'
            },
            success: functionCheck
        };

        function functionCheck(response) {
            console.log("checking data "+ response);
            var initialhtml=$("<div id=\"ajax-info\">\n" +              // resetting the html inside the in ajax response for new result
                "                       <div id=\"address\"></div>\n" +
                "                       <div id=\"general-info\">\n" +
                "                           <div id=\"ajax-categery\"></div>\n" +
                "                       </div>\n" +
                "                       <div id=\"timeing\"></div>\n" +
                "                   </div>\n" +
                "\n" +
                "                   <div id=\"ajax-img\"></div>");
            $("#ajax-response").empty();
            $("#ajax-response").html(initialhtml);
            var name1=response.name;
            var mobile=response.phone;
            var phone_no=response.display_phone;
            var reviews=response.review_count;
            var categorie1=response.categories[0] && response.categories[0].title; //first check do null check means first check cat is availble then pick cat from index
            var categorie2=response.categories[1] && response.categories[1].title;
            var categorie3=response.categories[2] && response.categories[2].title;
            var rating=response.rating;
            var address=response.location && response.location.display_address;
            var photo1=response.photos[0];
            var photo2=response.photos[1];
            var photo3=response.photos[2];
            var price=response.price;
            var startTime=response.hours[0].open[0].start;
            var endTime=response.hours[0].open[0].end;
            var isOpen=response.hours[0].is_open_now;
            var seeReview=response.messaging && response.messaging.url;

            //$('#ajax-response').text(JSON.stringify(response.name));
            var showName=$("<div>").addClass("name").html(name1);
            $('#address').append(showName);
            var showAdress=$("<div>").addClass("address").html(address);
            $('#address').append(showAdress);
            var showMobile=$("<div>").addClass("mobile").html(mobile);
            $('#address').append(showMobile);
            var showPhone=$("<div>").addClass("phone").html(phone_no);
            $('#address').append(showPhone);
            var countReviews=$("<div>").addClass("reviews").html("Total Reviews : "+reviews);
            $('#general-info').append(countReviews);

            var showRating=$("<div>").addClass("rating").html("Rating "+rating);
            $('#general-info').append(showRating);


            if(photo1) {
                var img1 = $('<img class="yelp-image">');
                img1.attr('src', photo1);
                $('#ajax-img').append(img1);
            }
            //var showPhoto1=$("<div>").addClass("Photo1").html(photo1);

            //$('#ajax-response').append(showPhoto1);

           if(photo2) {
               var img2 = $('<img class="yelp-image">');
               img2.attr('src', photo2);
               $('#ajax-img').append(img2);
           }

           if(photo3) {
               var img3 = $('<img class="yelp-image">');
               img3.attr('src', photo3);
               $('#ajax-img').append(img3);
           }


            var showPrice=$("<div>").addClass("price").html("Price : "+ price);
            $('#general-info').append(showPrice);
            var restoCategorie1=$("<div>").addClass("restoCategorie1").html(categorie1+",");
            $('#ajax-categery').append(restoCategorie1);
            var restoCategorie2=$("<div>").addClass("restoCategorie2").html(categorie2);
            $('#ajax-categery').append(restoCategorie2);
            var restoCategorie3=$("<div>").addClass("restoCategorie3").html(categorie3);
            $('#ajax-categery').append(restoCategorie3);
            var showStartTime=$("<div>").addClass("startTime").html("Start Time : "+startTime);
            $('#timeing').append(showStartTime);
            var showEndTime=$("<div>").addClass("endTime").html("End Time : "+ endTime);
            $('#timeing').append(showEndTime);
            var showIsOpen=$("<div>").addClass("open").html("Open :" + isOpen);
            $('#timeing').append(showIsOpen);
            var showReviews=$("<a>").addClass("seeReviews").attr('href', seeReview).html('see reviews');
            $('#timeing').append(showReviews);


        }

        $('#ajax-response').text( );
        $.ajax(apiStuff);
    }
}