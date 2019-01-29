class Weather {

    constructor() {
        this.apiKey = '0c008c0a614253e7f6e8f6d8bb2e62bc';
        this.unit = 'imperial';
        this.url = 'https://api.openweathermap.org/data/2.5/weather';

    }

    getApiEndPoint(city) {
        //making url for ajax call
        var endPoint=this.url+"?q="+city+",US&APPID="+this.apiKey+"&units="+this.unit;
        return endPoint;

        //https://api.openweathermap.org/data/2.5/weather?q=Irvine,US&APPID=0c008c0a614253e7f6e8f6d8bb2e62bc&units=imperial'
    }
    //calling API and returning DATA for city weather

    getCityWeather(city, callBack) {
        $.ajax({
            url: this.getApiEndPoint(city),
            type:'GET',
            success: function (weatherResponse) {
                console.log(weatherResponse);
                callBack(weatherResponse);
            }
        })

    }
}