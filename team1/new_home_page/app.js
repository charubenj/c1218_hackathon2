class App{

    constructor(object){
        this.weather= new Weather();//making object of wether class

        this.object=object;
        this.addEventhandlers=this.addEventhandlers.bind( this );
        //this.getCityWeather= this.getCityWeather.bind(this);

        //this.weather=this.weather.bind( this );

    }
//{temp: 53.37, pressure: 1014, humidity: 86, temp_min: 46.94, temp_max: 59}
    addEventhandlers(){
        var weather =this.weather;
        var object=this.object
        object.weatherButton.click(function() {
            //debugger;
            weather.getCityWeather('Irvine', function (weatherResponse) {
                console.log("testing");
                //debugger;
                var minTemp=weatherResponse.main.temp_min;

                var maxTemp=weatherResponse.main.temp_max;

                var cityName=weatherResponse.name;

                var currentCityTemp=cityName+" max temp is "+maxTemp+"and min temp is "+maxTemp;

                object.weatherResult.html(currentCityTemp);
            })

        })
    }
}