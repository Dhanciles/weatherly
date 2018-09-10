import React, { Component } from 'react';
import './CurrentWeather.css'



export default class CurrentWeather extends Component {
  constructor() {
    super();
    
  }

  render() {
    // let weatherPrefix = this.props.weatherData

    if (this.props.weatherData.forecast) {
      console.log(this.props.weatherData.forecast)
      return(
        <div className="currWeather">
          <h1>{this.props.cityData}, {this.props.stateData}</h1>
          <h2>{this.props.weatherData.forecast.simpleforecast.forecastday[0].date.weekday}, {this.props.weatherData.forecast.simpleforecast.forecastday[0].date.monthname_short}. {this.props.weatherData.forecast.simpleforecast.forecastday[0].date.day}</h2>
          <img className="weatherPic" src={this.props.weatherData.forecast.simpleforecast.forecastday[0].icon_url}/>
          <h3>High: {this.props.weatherData.forecast.simpleforecast.forecastday[0].high.fahrenheit}º <span> - Low: {this.props.weatherData.forecast.simpleforecast.forecastday[0].low.fahrenheit}º</span></h3>
          <h3>{this.props.weatherData.forecast.simpleforecast.forecastday[0].conditions}</h3> 
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