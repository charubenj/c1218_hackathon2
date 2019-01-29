class App{

    constructor(object){
        this.weather= new Weather();
        this.object=object;

    }

    addEventhandlers(){
        var weather=this.weather;
        var object=this.object;
        console.log("testing");
        this.object.weatherButton.click(function(){
            weather.getCityWeather('Irvine,US',function(response){
                console.log("hello", response);
             object.weatherResult.html(response.main.temp)

            })
        })

    }








}