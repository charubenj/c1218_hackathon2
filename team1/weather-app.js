class App {

    constructor(object) {
        this.weather = new Weatherapi();//making object of wether class
        this.object = object;
        this.addEventhandlers = this.addEventhandlers.bind(this);
        //this.getCityWeather= this.getCityWeather.bind(this);
        //this.weather=this.weather.bind( this );
    }

//{temp: 53.37, pressure: 1014, humidity: 86, temp_min: 46.94, temp_max: 59}
    addEventhandlers() {
        var weather = this.weather;
        var object = this.object
        object.weatherButton.click(function () {
            var currentdate = new Date();
            //debugger;
            weather.getCityWeather('Boston', function (weatherResponse, forecastClass) {
                console.log("new   *********** testing");
                //debugger;
                var minTemp = weatherResponse.main.temp_min;
                var maxTemp = weatherResponse.main.temp_max;
                var temp = weatherResponse.main.temp;
                var cityName = weatherResponse.name;
                var description = weatherResponse.weather[0].description;
                var forecast = weatherResponse.weather[0].description;
                console.log(forecast);
                $("body").addClass(forecastClass);
                // var currentCityTemp = cityName + " max temp is " + maxTemp + "and min temp is " + maxTemp;
                //object.weatherResult.html(currentCityTemp);
                // object.cityName.html(currentCityTemp);
                object.cityName.html(cityName);
                object.dateandtime.html(currentdate);
                object.mintemp.html("Minimum Temp : " + minTemp);
                object.maxtemp.html("Maximum Temp : " + maxTemp);
                object.avgtemp.html("Today's Avg Temp " + temp);
                object.description.html(description);

            })
        })
    }
}


