import { Link } from 'react-router-dom'

const Resources = () => {
  return (
    <div>
      <h3>Icons</h3>
      <p>
        Iconset: <a href='https://www.iconfinder.com/iconsets/weather-color-2' className='App-link' target="_blank" rel="noopener">Weather Color</a><br />
        Author: <a href='https://www.iconfinder.com/Neolau1119' className='App-link' target="_blank" rel="noopener">Sihan Liu</a><br />
        License: Free for commercial use
      </p>
      <br />
      <h3>Weather API</h3>
      <p>
        <div className='op-icon-div'><img className='op-icon' src='/images/OpenWeather-Negative-Logo.png' /></div>
        <a href='https://openweathermap.org' className='App-link' target="_blank" rel="noopener" npm >Weather data provided by OpenWeather</a>
      </p>
      <br />
      <p>
        <Link to='/' className='App-link'>Go Back</Link>
      </p>
    </div>
  )
};

export default Resources;
