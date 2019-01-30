$(document).ready(initializeApp)




function initializeApp(){



    /*$("#getWeather").click(function(event){
        alert('hello');

    }); */

     var app=new App({
        weatherButton: $("#getWeather"),
        weatherResult: $("#weatherResult"),
         brewriesInfo: $("#brewriesInfo"),
         cityName:$(".cityName"),
         mintemp :$(".min-temp"),
         maxtemp:$(".max-temp"),
         avgtemp:$(".avg-temp"),
         dateandtime:$(".dateandtime"),
         description:$(".description"),


    });
        app.addEventhandlers();
}