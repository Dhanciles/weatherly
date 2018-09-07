import React, { Component } from 'react';
import './Card.css'

export default class Card extends Component {
  constructor() {
    super();

  }
  
  render() {
    
    if (this.props.cardInfo) {
    return(
      <div className="seven-hour">
        <h3 className="weather-text">{this.props.cardInfo.FCTTIME.civil}</h3>
        <img className="weatherPic" src={this.props.cardInfo.icon_url}/>
        <h3 className="weather-text">{this.props.cardInfo.temp.english}º</h3>
      </div>
    )
    } else if (this.props.tenDayInfo) {
      return(
      <div className="ten-days">
        <h3 className="weather-text">{(this.props.tenDayInfo.date.weekday).slice(0,3)}</h3>
        <img className="weatherPic" src={this.props.tenDayInfo.icon_url}/>
        <h3 className="weather-text">{this.props.tenDayInfo.high.fahrenheit}º</h3>
        <h3 className="weather-text">{this.props.tenDayInfo.low.fahrenheit}º</h3>
      </div>
    )
    }

  }

}