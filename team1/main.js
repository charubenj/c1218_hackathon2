$(document).ready(initializeApp)




function initializeApp(){



    /*$("#getWeather").click(function(event){
        alert('hello');

    }); */
    $("#searchButton").click(function(){
        console.log ("search button was clicked ");
    })

    new Search();


     var app=new App({
        weatherButton: $("#getWeather"),
        weatherResult: $("#weatherResult"),
    });
    app.addEventhandlers();//  */
}