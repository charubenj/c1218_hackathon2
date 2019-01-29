$(document).ready(initializeApp)




function initializeApp(){

    var app=new App({
        weatherButton: $("#getWeather"),
        weatherResult: $("#weatherResult"),
    });
    app.addEventhandlers();







}