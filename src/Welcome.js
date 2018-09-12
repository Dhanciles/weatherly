import React,  { Component } from 'react'; 
import './Welcome.css'; 

export default class Welcome extends Component {
  constructor() {
    super(); 

    this.state = {
        userName: '', 
        location: '', 
        trie: {}
      }
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleLocationChange = this.handleLocationChange.bind(this); 
      this.submitNameAndLocation = this.submitNameAndLocation.bind(this); 
  }

  componentDidMount() {
    this.setState({
      trie: this.props.trie
    })
  }

  handleNameChange(event) {
      this.setState({userName: event.target.value})
  }

  handleLocationChange(event) {
    this.setState({location: event.target.value})
    console.log(this.state.trie.suggest(event.target.value))
  } 

  submitNameAndLocation(event) {
    event.preventDefault()
    this.props.takeNameAndLocation(this.state.userName, this.state.location)
  }

  render() {
    
    return (
      <div className="welcome"> 
        <h1 className="welcome-msg"> Welcome to Weatherly</h1>
        <p className="prompt-msg">Please Enter a Username and Location Below</p> 
        <form>
          <input id="user-name"type="text" placeholder="Username" onChange={this.handleNameChange}/>
          <input className="location" type="text" placeholder="City, State/Zip Code" onChange={this.handleLocationChange}/>
          <button className="submit-button" onClick={this.submitNameAndLocation}>Submit</button>
        </form> 
      </div> 
    )
  }
}