class Weather {

    constructor() {
        this.apiKey = '0c008c0a614253e7f6e8f6d8bb2e62bc';
        this.unit = 'imperial';
        this.url = 'https://api.openweathermap.org/data/2.5/weather';
        this.codetoClassMapping = {
            'thunderstorm with light rain': 'thunderstorm',
            'thunderstorm with rain': 'thunderstorm',
            'thunderstorm with heavy rain':'thunderstorm',
            'light thunderstorm': 'thunderstorm',
            'thunderstorm': 'thunderstorm',
            'heavy thunderstorm': 'thunderstorm',
            'ragged thunderstorm': 'thunderstorm',
            'thunderstorm with light drizzle': 'thunderstorm',
            'thunderstorm with drizzle': 'thunderstorm',
            'thunderstorm with heavy drizzle': 'thunderstorm',
            'light intensity drizzle': 'drizzle',
            'drizzle': 'drizzle',
            'heavy intensity drizzle': 'drizzle',
            'light intensity drizzle rain': 'drizzle',
            'drizzle rain': 'drizzle',
            'heavy intensity drizzle rain': 'drizzle',
            'shower rain and drizzle': 'drizzle',
            'heavy shower rain and drizzle': 'drizzle',
            'shower drizzle': 'drizzle',
            'light rain': 'rain',
            'moderate rain': 'rain',
            'heavy intensity rain':'rain',
            'very heavy rain': 'rain',
            'extreme rain': 'rain',
            'freezing rain': 'rain',
            'light intensity shower rain': 'rain',
            'shower rain': 'rain',
            'heavy intensity shower rain': 'rain',
            'ragged shower rain': 'rain',
            'light snow': 'snow',
            'snow': 'snow',
            'heavy snow': 'snow',
            'sleet': 'snow',
            'shower sleet': 'snow',
            'light rain and snow': 'snow',
            'rain and snow': 'snow',
            'light shower snow': 'snow',
            'shower snow': 'snow',
            'heavy shower snow': 'snow',
            'mist': 'atmosphere',
            'fog': 'atmosphere',
            'sand': 'atmosphere',
            'dust': 'atmosphere',
            'volcanic ash': 'atmosphere',
            'squalls': 'atmosphere',
            'tornado': 'atmosphere',
            'smoke': 'atmosphere',
            'haze': 'atmosphere',
            'sand, dust whirls': 'atmosphere',
            'clear sky': 'clear',
            'few clouds': 'clouds',
            'scattered clouds': 'clouds',
            'broken clouds': 'clouds',
            'overcast clouds': 'clouds'
        };

    };

    getApiEndPoint(city) {
        //making url for ajax call
        var endPoint = this.url + "?q=" + city + ",US&APPID=" + this.apiKey + "&units=" + this.unit;
        return endPoint;

        //https://api.openweathermap.org/data/2.5/weather?q=Irvine,US&APPID=0c008c0a614253e7f6e8f6d8bb2e62bc&units=imperial'
    }
    //calling API and returning DATA for city weather

    getCityWeather(city, callBack) {
        var codetoClassMapping = this.codetoClassMapping
        $.ajax({
            url: this.getApiEndPoint(city),
            type: 'GET',
            success: function (weatherResponse) {
                //console.log(weatherResponse);
                var forecast = weatherResponse.weather[0].description;
                var forecastClass = codetoClassMapping[forecast];
                callBack(weatherResponse, forecastClass);
            }
        })

    }
}