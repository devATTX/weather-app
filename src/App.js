import './App.css';
import { useEffect, useState } from 'react';
import CurrentTemp from './components/CurrentTemp'


function App() {
  const URL = 'http://api.openweathermap.org/data/2.5/weather';
  const [currentWeather, setCurrentWeather] = useState('');
  const [currentTemp, setCurrentTemp] = useState('10')
  const temperatureUnit = 'F'
  const lat = '45.307781'
  const lon = '-93.577408'
  const appId = ''

  // Get Current Weather
  const getCurrentWeather = async (lat, lon, appId) => {

  }

  useEffect(() => {
    const getCurrentWeather = async () => {
      try {
        const response = await fetch(`${URL}?lat=${lat}&lon=${lon}&appid=${appId}&units=imperial`)
        const currentWeather = await response.json();
        console.log(currentWeather)
        setCurrentWeather(currentWeather)
        setCurrentTemp(Math.round(currentWeather.main.temp))
      } catch (err) {
        console.error(err.stack)
      }
    }

    (async () => await getCurrentWeather())();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <CurrentTemp temperature={currentTemp} temperatureUnit={temperatureUnit} />
        <p>What a sunny day!</p>
      </header>
    </div>
  );
}

export default App;
