import React, { Component } from 'react';
import './Card.css'

export default class Card extends Component {
  constructor() {
    super();

  }
  
  render() {
    console.log(this.props)
    if (this.props.cardInfo) {
    return(
      <div>
        <h3>{this.props.cardInfo.FCTTIME.civil}</h3>
        <img className="weatherPic" src={this.props.cardInfo.icon_url}/>
        <h3>{this.props.cardInfo.temp.english}º</h3>
      </div>
    )
    } else if (this.props.tenDayInfo) {
      return(
      <div className="ten-days">
        <h3>{this.props.tenDayInfo.date.weekday}</h3>
        <img className="weatherPic" src={this.props.tenDayInfo.icon_url}/>
        <h3>{this.props.tenDayInfo.high.fahrenheit}º</h3>
        <h3>{this.props.tenDayInfo.low.fahrenheit}º</h3>
      </div>
    )
    }

  }

}