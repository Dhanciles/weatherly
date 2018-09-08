import React,  { Component } from 'react'; 
import './Welcome.css'; 

export default class Welcome extends Component {
  constructor() {
    super(); 

    this.state = {
        userName: '', 
        location: ''
      }
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleLocationChange = this.handleLocationChange.bind(this); 

  }

  handleNameChange(event) {
      this.setState({userName: event.target.value})
  }

  handleLocationChange(event) {
    this.setState({location: event.target.value})
  } 

  render() {
    return (
      <div className="welcome"> 
        <h1 className="welcome-msg"> Welcome to Weatherly</h1>
        <p className="prompt-msg">Please Submit Your Name and Location Below</p> 
        <form>
          <input id="user-name"type="text" placeholder="Enter your Name" onChange={this.handleNameChange}/>
          <input className="location" type="text" placeholder="Enter City or Zip Code" onChange={this.handleLocationChange}/>
          <button className="submit-button" onClick={this.submitNameAndLocation}>Submit</button>
        </form> 
      </div> 
    )
  }
}