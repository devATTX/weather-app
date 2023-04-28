import '../App.css';
import { useEffect, useState } from 'react';
import CurrentTemp from './CurrentTemp'

const Home = () => {
  const URL = 'http://api.openweathermap.org/data/2.5/weather';
  const [currentWeather, setCurrentWeather] = useState(null)
  const [error, setError] = useState(null)
  const temperatureUnit = 'F'
  const lat = '45.307781'
  const lon = '-93.577408'
  const units = 'imperial'

  const tabTitle = (newTitle) => {
    return (document.title = newTitle)
  }

  // Get Current Weather
  const getCurrentWeather = async (lat, lon, units) => {
    try {
      const response = await fetch(`${URL}?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_OW_API_KEY}&units=${units}`)
      console.log('Response Status: ' + response.status);
      if (response.status === 200) {
        const currentWeather = await response.json();
        console.log(currentWeather)
        setCurrentWeather(currentWeather)
        setError(null)
        tabTitle(roundTemp(currentWeather.main.temp) + '°' + temperatureUnit + ' - Weathery Day')
      } else {
        setCurrentWeather(null)
        setError(Error(response.status + ' - ' + response.statusText))
      }
    } catch (err) {
      setError(err)
      console.error(err.stack)
    }
  }

  useEffect(() => {
    getCurrentWeather(lat, lon, units);
  }, [])

  const currentWeatherId = (currentWeather) => {
    console.log(currentWeather.weather);
    return currentWeather.weather[0].id;
  }

  const roundTemp = (temp) => {
    return Math.round(temp)
  }

  return (
    <>
      {error && <div>Error: {error.message}</div>}
      {currentWeather && <CurrentTemp
        temperature={roundTemp(currentWeather.main.temp)}
        temperatureUnit={temperatureUnit}
        currentWeatherId={currentWeatherId(currentWeather)}
        feelsLikeTemp={roundTemp(currentWeather.main.feels_like)}
        highTemp={roundTemp(currentWeather.main.temp_max)}
        lowTemp={roundTemp(currentWeather.main.temp_min)}
      />}
    </>
  )
};

export default Home;
