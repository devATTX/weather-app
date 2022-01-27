import Icons from '../icons.json'
import { useEffect, useState } from 'react';

const CurrentTemp = ({ temperature, temperatureUnit, currentWeatherId }) => {
  const getWeatherIdForOpenWeather = (weatherId) => {
    switch (weatherId) {
      case 800:
      case 803:
        return weatherId
      case 801: /*  */
      case 802:
      case 804:
        return 803
      default:
        return 751
    }
  }

  const weatherImage = (Icons.filter((item) => item.id === getWeatherIdForOpenWeather(currentWeatherId)))[0].image
  console.log(weatherImage);
  return (
    <div>
      <div className='Home-currentWeather'>
        <img className='Home-weather-icon' src={weatherImage} />
        <span className='Home-temperature'>{temperature}°{temperatureUnit}</span>



      </div>
      <p>What a weathery day!</p>
    </div>
  )
};

export default CurrentTemp;
