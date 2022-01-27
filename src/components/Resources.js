import { Link } from 'react-router-dom'

const Resources = () => {
  return (
    <div>
      <h3>Icons</h3>
      <p>
        Iconset: <a href='https://www.iconfinder.com/iconsets/weather-color-2' className='App-link' target="_blank">Weather Color</a><br />
        Author: <a href='https://www.iconfinder.com/Neolau1119' className='App-link' target="_blank">Sihan Liu</a><br />
        License: Free for commercial use
      </p>
      <h3>Weather API</h3>
      <p>
        API: <a href='https://openweathermap.org' className='App-link' target="_blank">OpenWeather</a><br />
      </p>
      <p>
        <Link to='/' className='App-link'>Go Back</Link>
      </p>
    </div>
  )
};

export default Resources;
