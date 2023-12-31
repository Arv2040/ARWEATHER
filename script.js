const apiKey = //apikey;
const apiUrl = //api url;
const searchbox = document.querySelector(".search input");
const sbutton = document.querySelector(".search button");

async function weather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
    document.querySelector(".CityName").innerHTML = "City Name:  " + data.name;
    document.querySelector(".temp").innerHTML = "Temp:  " + Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = "Humidity:  " + Math.round(data.main.humidity) + "%";
    document.querySelector(".windspeed").innerHTML = "Wind Speed:  " + Math.round(data.wind.speed) + "km/h";
    document.querySelector(".description").innerHTML ="DESCRIPTION:  " +  data.weather[0].description;

}
sbutton.addEventListener("click",()=>{
    weather(searchbox.value);
})

