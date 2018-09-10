import React, { Component } from 'react';
import Card from './Card'
import './SevenHour.css';

export default class SevenHour extends Component {
  constructor() {
    super();

  }

  render() {
    if (this.props.sevenHourData.hourly_forecast) {
      let hourlyForecast = this.props.sevenHourData.hourly_forecast

      return hourlyForecast.map((hours) => {
     
      return(
        <div>
          <Card cardInfo={hours} />
        </div>
      )
    }).slice(0,7)
  } else {
    return (<p>Loading</p>)
  }
}


}