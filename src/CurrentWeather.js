import React, { Component } from 'react';
import './CurrentWeather.css'



export default class CurrentWeather extends Component {
  constructor() {
    super();
    
  }

  render() {
    if (this.props.weatherData.forecast && this.props.tempData.current_observation) {

      let weatherPrefix = this.props.weatherData.forecast.simpleforecast.forecastday[0]

      return(
        <div className="currWeather">
          <h1>{this.props.cityData}, {this.props.stateData}</h1>
          <h2>{weatherPrefix.date.weekday}, {weatherPrefix.date.monthname_short}. {weatherPrefix.date.day}</h2>
          <h1>{this.props.tempData.current_observation.temperature_string}</h1>
          <img className="weatherPic" src={weatherPrefix.icon_url}/>
          <h3>High: {weatherPrefix.high.fahrenheit}º <span> - Low: {weatherPrefix.low.fahrenheit}º</span></h3>
          <h3>{weatherPrefix.conditions}</h3> 
          <h3>{this.props.weatherData.forecast.txt_forecast.forecastday[0].fcttext}</h3>
        </div>
      )
    } else {
      return (
        <p>LOADING</p>
      ) 
    }
  }
}