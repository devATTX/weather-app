import Icons from '../icons.json'
import { useEffect, useState } from 'react';
import ConvertOWConditionCode from '../util/ConvertConditionCodeFromOpenWeather';

const CurrentTemp = ({ temperature, temperatureUnit, currentWeatherId, feelsLikeTemp, highTemp, lowTemp }) => {
  const weatherImage = (Icons.filter((item) => item.id === ConvertOWConditionCode(currentWeatherId)))[0].image
  console.log(weatherImage);
  return (
    <div>
      <div className='Home-currentWeather'>
        <img className='Home-weather-icon' src={weatherImage} />
        <span className='Home-temperature'>{temperature}°{temperatureUnit}</span>
      </div>
      <div>
        <strong>Feels Like:</strong> {feelsLikeTemp}°{temperatureUnit} <strong>High:</strong> {highTemp}°{temperatureUnit} <strong>Low:</strong> {lowTemp}°{temperatureUnit}
      </div>
      <p>What a weathery day!</p>
    </div>
  )
};

export default CurrentTemp;
