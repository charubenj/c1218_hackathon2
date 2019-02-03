$(document).ready(function () {


    $('.md-trigger').on('click', function () {
        $('.md-modal').addClass('md-show');
        google.maps.event.trigger(map, "resize");
        $('#map').hide();
        $("#map-search").hide();
    });

    $('.md-close').on('click', function () {
        $('.md-modal').removeClass('md-show');
        $('#map').hide();
        $("#map-search").hide();

    });

    $("#show-map").on('click',function(){
        $('#map').show();
        $("#map-search").show();

    })

    $("#show-review").on('click',function(){
        $(".weather-data").hide();
        $(".brewery-info").show();
        $(".md-overlay").removeAttr('class').addClass("md-overlay").addClass("review-background");
    })

    $("#getWeather").on('click',function(){
        $(".weather-data").show();
        $(".brewery-info").hide();
        $(".md-overlay").removeClass("review-background");
    })



})