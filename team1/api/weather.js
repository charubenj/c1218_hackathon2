class Weather {

    constructor() {
        this.apiKey = '0c008c0a614253e7f6e8f6d8bb2e62bc';
        this.units = 'imperial';
        this.url = 'https://api.openweathermap.org/data/2.5/weather';
    }

    getApiEndPoint(city) {
        var endPoint = this.url + '?q=' + city + '&APPID=' + this.apiKey + '&units=' + this.units
        return endPoint;
        //https://api.openweathermap.org/data/2.5/weather?q=Irvine,US&APPID=0c008c0a614253e7f6e8f6d8bb2e62bc&units=imperial'
    }

    getCityWeather(city, callBack) {
        var url = this.getApiEndPoint(city);
        console.log(url);

        $.ajax({
            url: url,
            success: function (response) {
                console.log(response)
                callBack(response)
            }
        })

    }


}