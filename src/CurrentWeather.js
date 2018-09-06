import React, { Component } from 'react';




export default class CurrentWeather extends Component {
  constructor() {
    super();

  }

  render() {
    let weatherPrefix = this.props.weatherData.current_observation

    return(
      <div>
        <h1>{weatherPrefix.display_location.full}</h1>
        <img className="weatherPic" src={weatherPrefix.icon_url}/>
        <h3>{weatherPrefix.temperature_string}</h3>
        <h3>{weatherPrefix.icon}</h3>
      </div>
    )
  }




}