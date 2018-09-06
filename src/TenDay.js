import React, { Component } from 'react';
import Card from './Card'

export default class TenDay extends Component {
  constructor() {
    super();

  }

  render() {
    let keys = Object.keys(this.props.tenDayData)
    let tenDay = this.props.tenDayData.forecast.simpleforecast.forecastday

    return tenDay.map((day) => {
      return(
        <div>
          <Card tenDayInfo={day} />
        </div>
      )
    })
  }

}