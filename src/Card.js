import React, { Component } from 'react';

export default class Card extends Component {
  constructor() {
    super();

  }
  
  render() {
    console.log(this.props)
    return(
      <div>
        <h3>{this.props.cardInfo.FCTTIME.civil}</h3>
        <img className="weatherPic" src={this.props.cardInfo.icon_url}/>
        <h3>{this.props.cardInfo.temp.english}º</h3>
      </div>
    )
    

  }

}