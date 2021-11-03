 

function showDegrees(){
    const fetchPromise = fetch("https://api.openweathermap.org/data/2.5/weather?zip=14656,de&appid=cb7fa35f68faa49bba4f60066f0ac487");
    fetchPromise.then(response => {
      return response.json();
    }).then(weather => {
      var content = weather.main.temp - 273.15.toFixed(2) +"C";
      document.getElementById("date").innerHTML = content;
    });
}

function updateWeather(){
    showDegrees();
}
setInterval( function() { updateWeather(); }, 30*60*1000 );
