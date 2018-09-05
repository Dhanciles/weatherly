import React,  { Component } from 'react'; 
import './Welcome.css'; 

export default class Welcome extends Component {
  constructor() {
    super(); 

  }

  render() {
    return (
      <div className="welcome"> 
        <h1 className="welcome-msg"> Welcome to Weatherly</h1>
        <p className="prompt-msg">Please Submit Your Name and Location Below</p> 
        <form>
          <input className="user-name"type="text" placeHolder="Enter your Name"/>
          <input className="location" type="text" placeHolder="Enter City or Zip Code"/>
          <button className="submit-button">Submit</button>
        </form> 
      </div> 
    )
  }
}