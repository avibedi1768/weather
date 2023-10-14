const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '25689bd44dmshf68dc5cb6b321f1p1c7fefjsn31cc02f7e6e2',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};


const getWeather = (city) => {
  cityName.innerHTML = city;
  fetch(url + city, options)
    .then(response => response.json())
    .then((response) => {

      console.log(response);

      cloud_pct.innerHTML = response.cloud_pct
      temp.innerHTML = response.temp
      temp2.innerHTML = response.temp
      feels_like.innerHTML = response.feels_like
      humidity.innerHTML = response.humidity
      humidity2.innerHTML = response.humidity
      min_temp.innerHTML = response.min_temp
      max_temp.innerHTML = response.max_temp
      wind_speed.innerHTML = response.wind_speed
      wind_speed2.innerHTML = response.wind_speed
      wind_degrees.innerHTML = response.wind_degrees
      sunrise.innerHTML = response.sunrise
      sunset.innerHTML = response.sunset
    })
    .catch(error => console.error(error))
}

submit.addEventListener('click', (e) => {
  e.preventDefault()
  getWeather(city.value)
})

getWeather('Amritsar')
cityName.innerHTML = 'Amritsar'