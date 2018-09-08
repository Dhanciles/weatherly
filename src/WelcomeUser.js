import React,  {Component} from 'react'

export default class WelcomeUser extends Component {
  constructor() {
    super(); 
  }

  render() {
    return(
      <div className="welcome">
        <h1 className="welcome-user"> Welcome {this.props.userName}</h1>
        <input className="search-input" type="text" />
        <button className="search-button">Search</button> 
      </div>

      )
  }  
}