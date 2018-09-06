import React, { Component } from 'react';
import './App.css';
import { data } from './mockdata.js'
import Welcome from './Welcome'
import CurrentWeather from './CurrentWeather'
import SevenHour from './SevenHour'
import TenDay from './TenDay'

export default class App extends Component {
  constructor() {
    super();

  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <img className="logo" src={require("./images/weathrly-logo.png")}/>
        </header>
        <Welcome />
        <CurrentWeather weatherData={data} />
        <div className="seven-hours">
          <SevenHour sevenHourData={data} />
        </div>
        <TenDay tenDayData={data} />
      </div>
    );
  }
}

