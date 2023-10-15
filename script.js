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

//for common cities:
//amritsar
fetch(url + 'Amritsar', options)
  .then(response => response.json())
  .then((response) => {
    console.log('asr', response)

    cloud_pct_asr.innerHTML = response.cloud_pct
    temp_asr.innerHTML = response.temp
    feels_like_asr.innerHTML = response.feels_like
    humidity_asr.innerHTML = response.humidity
    max_temp_asr.innerHTML = response.max_temp
    min_temp_asr.innerHTML = response.min_temp
    wind_speed_asr.innerHTML = response.wind_speed
    wind_degrees_asr.innerHTML = response.wind_degrees
    sunrise_asr.innerHTML = response.sunrise
    sunset_asr.innerHTML = response.sunset
  })
  .catch(error => console.error(error))

//for vrindavan
fetch(url + 'Vrindavan', options)
  .then(response => response.json())
  .then((response) => {
    console.log('vrn', response)

    cloud_pct_vrn.innerHTML = response.cloud_pct
    temp_vrn.innerHTML = response.temp
    feels_like_vrn.innerHTML = response.feels_like
    humidity_vrn.innerHTML = response.humidity
    max_temp_vrn.innerHTML = response.max_temp
    min_temp_vrn.innerHTML = response.min_temp
    wind_speed_vrn.innerHTML = response.wind_speed
    wind_degrees_vrn.innerHTML = response.wind_degrees
    sunrise_vrn.innerHTML = response.sunrise
    sunset_vrn.innerHTML = response.sunset
  })
  .catch(error => console.error(error))

//for seattle
fetch(url + 'Seattle', options)
  .then(response => response.json())
  .then((response) => {
    console.log('Patna', response)

    cloud_pct_stl.innerHTML = response.cloud_pct
    temp_stl.innerHTML = response.temp
    feels_like_stl.innerHTML = response.feels_like
    humidity_stl.innerHTML = response.humidity
    max_temp_stl.innerHTML = response.max_temp
    min_temp_stl.innerHTML = response.min_temp
    wind_speed_stl.innerHTML = response.wind_speed
    wind_degrees_stl.innerHTML = response.wind_degrees
    sunrise_stl.innerHTML = response.sunrise
    sunset_stl.innerHTML = response.sunset
  })

//for delhi
fetch(url + 'Delhi', options)
  .then(response => response.json())
  .then((response) => {
    console.log('Delhi', response)

    cloud_pct_del.innerHTML = response.cloud_pct
    temp_del.innerHTML = response.temp
    feels_like_del.innerHTML = response.feels_like
    humidity_del.innerHTML = response.humidity
    max_temp_del.innerHTML = response.max_temp
    min_temp_del.innerHTML = response.min_temp
    wind_speed_del.innerHTML = response.wind_speed
    wind_degrees_del.innerHTML = response.wind_degrees
    sunrise_del.innerHTML = response.sunrise
    sunset_del.innerHTML = response.sunset
  })