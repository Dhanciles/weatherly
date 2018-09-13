import React, { Component } from 'react';
import Card from './Card'

export default class TenDay extends Component {
  constructor() {
    super();
  }

  render() {

    if (this.props.tenDayData.forecast) {
      let dailyForecast = this.props.tenDayData.forecast.simpleforecast.forecastday
      return dailyForecast.map((days, index) => {
      return(
        <div key={index}>
          <Card tenDayInfo={days} />
        </div>
      )
    })
    } else {
    return (<p>Loading</p>)
    }
  }
}