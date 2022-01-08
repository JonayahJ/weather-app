import React, { useEffect, useState } from 'react';
import './App.css';
import DayCard from './components/Card';

function App() {
  // OWM API Endpoint: https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${apiKey}&units=${units}
  const [ weatherData, setWeatherData] = useState();

  // Fetch weather when component mounts
  useEffect(() => {
    const apiKey = process.env.REACT_APP_OWM_KEY
    const city = 'Brooklyn'
    const units = 'imperial'
    const cnt = 5

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=${cnt}&APPID=${apiKey}&units=${units}`)
      .then(res => res.json())
      .then(res => setWeatherData(res.list.map(forecast => {
        return {
          day: forecast.dt_txt,
          icon: forecast.weather[0].icon,
          max: forecast.main.temp_max, 
          min: forecast.main.temp_min,
        }
      })));
  }, []);

  // See results in console
  useEffect(() => {
    console.log(weatherData)
  }, [weatherData])
  

  return (
    <div className="App">
      <header className="App-header">
        {/* If weatherData is not undefine, map out the data to DayCard */}
        {!!weatherData && weatherData.map((i, index) => (
          <div key={index}>
            <DayCard day={i.day} icon={i.icon} max={i.max} min={i.min} />
          </div>
        ))}
        
      </header>
    </div>
  );
}

export default App;
