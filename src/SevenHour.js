import React, { Component } from 'react';
import Card from './Card'

export default class SevenHour extends Component {
  constructor() {
    super();

  }

  render() {
    let keys = Object.keys(this.props.sevenHourData.hourly_forecast)
    let hourlyForecast = this.props.sevenHourData.hourly_forecast

    return keys.map((key) => {
     
      return(
        <div>
          <Card cardInfo={hourlyForecast[key]} />
        </div>
      )
    })
  }

}