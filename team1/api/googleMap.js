class GoogleMap {

    constructor() {
        /* this.apiKey = '0c008c0a614253e7f6e8f6d8bb2e62bc';
        this.unit = 'imperial';
        this.url = 'https://api.openweathermap.org/data/2.5/weather'; */

        /*this.yelpApiKey='W65fNfobJPv2Ktfhu2f6Uox1BzTMceGzBuDu6ua7PAKXGJTx1oQjCHbuYuqDvLISCsCGl_9J4BUVYJMFmPxZordWAcP13859-LOZdYHu6s4D_x2xdvLXZmBJVLRPXHYx';
        this.yelpurl='http://danielpaschal.com/lfzproxies/yelpproxy.php?term=brewery&location=' */


    }

    /* getApiEndPoint(city) {
        //making url for ajax call
        var endPoint = this.url + "?q=" + city + ",US&APPID=" + this.apiKey + "&units=" + this.unit;
        return endPoint;

        //https://api.openweathermap.org/data/2.5/weather?q=Irvine,US&APPID=0c008c0a614253e7f6e8f6d8bb2e62bc&units=imperial'


    }

    //calling API and returning DATA for city weather

    getCityWeather(city, callBack) {
        $.ajax({
            url: this.getApiEndPoint(city),
            type: 'GET',
            success: function (weatherResponse) {
                console.log(weatherResponse);
                callBack(weatherResponse);
            }
        })

    } */


        apiStuff(){

            $.ajax({
                url: 'http://danielpaschal.com/lfzproxies/yelpproxy.php?term=brewery&location=irvine',
                method: 'get',
                dataType: 'json',
                data: {term: 'brewery', location: 'irvine'},
                headers: {apikey: 'W65fNfobJPv2Ktfhu2f6Uox1BzTMceGzBuDu6ua7PAKXGJTx1oQjCHbuYuqDvLISCsCGl_9J4BUVYJMFmPxZordWAcP13859-LOZdYHu6s4D_x2xdvLXZmBJVLRPXHYx'},
                success: function (yelpResponse) {
                    console.log(yelpResponse)
                    console.log(this.url)
                }
            })

        }

}