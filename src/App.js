import './App.css';
import CurrentTemp from './components/CurrentTemp'

const temperature = 10
const temperatureUnit = 'F'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <CurrentTemp temperature={temperature} temperatureUnit={temperatureUnit} />
        <p>What a sunny day!</p>
      </header>
    </div>

    /*
    import logo from './logo.svg';

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
  );
}

export default App;
