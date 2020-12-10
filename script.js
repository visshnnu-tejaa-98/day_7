let request = new XMLHttpRequest();
request.open("GET","https://restcountries.eu/rest/v2/all",true)
request.send();
request.onload = function(){
    let data = JSON.parse(this.response)
    let country = data.filter(country=>country.name==="India")
    let latitude = country[0].latlng[0];
    let longitude = country[0].latlng[1];
    let key = "7e01312693145aa48718efca21b9550f"
    let req = new XMLHttpRequest();
    let url = "http://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&appid="+key
    req.open("GET",url,true)
    req.send();
    req.onload = function(){
        let info = JSON.parse(this.response)
        console.log(info)
    }

    let request = new XMLHttpRequest()
    let cityName = "Germany"
    request.open("GET","http://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid=7e01312693145aa48718efca21b9550f",true)
    request.send();
    request.onload = function(){
        let info = JSON.parse(this.response)
        console.log(info)
    }

}

