var request  = new XMLHttpRequest()
request.open("GET","https://restcountries.eu/rest/v2/all",true)
request.send()
request.onload = function(){
    let data = JSON.parse(this.response)
    let country = data.filter(country=>country.name==="India")
    let lat = country[0].latlng[0];
    let long = country[0].latlng[1];
    let cityName = "Germany";
    getWeatherData(lat,long);
    getWeather(cityName)
}

function getWeatherData(lat,long){
    var request = new XMLHttpRequest();
    let url = "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&appid=7e01312693145aa48718efca21b9550f"
    request.open("GET",url,true);
    request.send()
    request.onload = function(){
        var data = JSON.parse(this.response)
        console.log(data)
    }
}   

function getWeather(cityName){
    var request = new XMLHttpRequest();
    let url = "http://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid=7e01312693145aa48718efca21b9550f"
    request.open("GET",url,true);
    request.send()
    request.onload = function(){
        var data = JSON.parse(this.response)
        console.log(data)
    }
}


