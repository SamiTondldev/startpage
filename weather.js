 

function showDegrees(){
  const fetchPromise = fetch("https://api.openweathermap.org/data/2.5/weather?zip=14656,de&appid=cb7fa35f68faa49bba4f60066f0ac487");
  fetchPromise.then(response => {
    return response.json();
  }).then(answer => {
    var temp = (answer.main.temp - 273.15).toFixed(0) +"°C";
    var weatherdesc = answer.weather[0].description;
    document.getElementById("temp").innerHTML = temp;
    document.getElementById("weatherdesc").innerHTML = weatherdesc;
    console.log(answer.weather);
    
  });
}

function updateWeather(){
  showDegrees();
}
updateWeather();
setInterval( function() { updateWeather(); }, 30*60*1000 );
