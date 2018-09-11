import React, { Component } from 'react';
import './App.css';
import { data } from './mockdata.js'
import {apiKey} from './API.js'
import Welcome from './Welcome'
import CurrentWeather from './CurrentWeather'
import SevenHour from './SevenHour'
import TenDay from './TenDay'
import WelcomeUser from './WelcomeUser'

export default class App extends Component {
  constructor() {
    super();

      this.state = {
        userName: '', 
        location: '', 
        currentWeatherData: {},
        currentTemp: {}, 
        sevenHourData: {}, 
        tenDayData: {},
        city: '',
        state: ''
      }
      this.takeNameAndLocation = this.takeNameAndLocation.bind(this); 
      this.getLocation = this.getLocation.bind(this)
      this.handleChange = this.handleChange.bind(this); 
  }

  takeNameAndLocation(name, location) {
    this.setState({userName: name, location: location})
    this.cleanLocation(location)
    this.updateLocalStorage(location, name)
  }

  handleChange(event) {
    this.setState({location: event.target.value})
  } 

  getLocation(event) {
    this.cleanLocation(this.state.location)
    this.updateLocalStorage(this.state.location)
    document.querySelector('.search-input').value = ''
  }

  cleanLocation(location) {

    if (location.includes(',')) {
    let cleanLocation = location.split(',')
    let cleanCity = cleanLocation[0].trim()
    let cleanState = cleanLocation[1].trim()

    this.callApi(cleanCity, cleanState)
    this.sevenHourApiCall(cleanCity, cleanState)
    this.tenDayApiCall(cleanCity, cleanState)
    this.callCurrWeather(cleanCity, cleanState)
    } else if (location.length === 5) {
      this.getZipCode(location)
    }
   
  }

  getZipCode(location) {
    fetch(`http://api.wunderground.com/api/${apiKey}/geolookup/q/${location}.json`)
    .then(response => response.json())
    .then(info => {
      let zipCity = info.location.city
      let zipState = info.location.state
      
      this.callApi(zipCity, zipState)
      this.sevenHourApiCall(zipCity, zipState)
      this.tenDayApiCall(zipCity, zipState) 
      this.callCurrWeather(zipCity, zipState)   
    })
    .catch(error => {
      console.log(error)
    })

  }

  callApi(city, state) {
    fetch(`http://api.wunderground.com/api/${apiKey}/forecast/q/${state}/${city}.json`)
    .then(response => response.json())
    .then(info => {
      this.setState({
        currentWeatherData: info,
        city: city,
        state: state
      })
    })
    .catch(error => {
      console.log(error)
    })
  }

  callCurrWeather(city, state) {
    fetch(`http://api.wunderground.com/api/${apiKey}/conditions/q/${state}/${city}.json`)
    .then(response => response.json())
    .then(info => {
      this.setState({
        currentTemp: info 
      })
    })
    .catch(error => {
      console.log(error)
    })
  }

  sevenHourApiCall(city, state) {
    fetch(`http://api.wunderground.com/api/${apiKey}/hourly/q/${state}/${city}.json`)
    .then(response => response.json())
    .then(info => {
      this.setState({
        sevenHourData: info
      })
    })
    .catch(error => {
      console.log(error)
    })
  }

  tenDayApiCall(city, state) {
    fetch(`http://api.wunderground.com/api/${apiKey}/forecast10day/q/${state}/${city}.json`)
    .then(response => response.json())
    .then(info => {
      this.setState({
        tenDayData: info
      })
    })
    .catch(error => {
      console.log(error)
    })
  }

  updateLocalStorage(location, name) {
    localStorage.setItem('weatherly', location)
     if(name) {
      localStorage.setItem('userName', name)
    }  
  } 

  getFromLocalStorage() {
    if(localStorage.length) {
      const retrieveLocation = localStorage.getItem('weatherly')
      const retrieveName = localStorage.getItem('userName')

      this.cleanLocation(retrieveLocation)
      this.setState({
      userName: retrieveName, 
      location: retrieveLocation
        })
      } 
  }

  componentDidMount() {
    this.getFromLocalStorage()
  }

  
  render() {
      
      if(!this.state.userName) {
    return ( 
        <div className="App">
          <header className="App-header">
            <img className="logo" src={require("./images/weathrly-logo.png")}/>
          </header>
          <Welcome takeNameAndLocation={this.takeNameAndLocation}/>
        </div>
        );
      } else {
        return(
           <div className="App">
            <header className="App-header-rerender">
            <h1 className="welcome-user"> Welcome {this.state.userName}</h1>
              <img className="logo" src={require("./images/weathrly-logo.png")}/>
            <div className="search-container">
              <input className="search-input" type="text" placeholder="New Location" onChange={this.handleChange} />
              <button className="search-button" onClick={this.getLocation} >Submit</button>
            </div>   
            </header>
            <div className="Welcome-current-weather">
              <CurrentWeather weatherData={this.state.currentWeatherData}
                              tempData={this.state.currentTemp}
                              cityData={this.state.city}
                              stateData={this.state.state} />
              {<WelcomeUser />}
            </div>
            <div className="seven-hours">
              <SevenHour sevenHourData={this.state.sevenHourData} />
            </div>
            <TenDay tenDayData={this.state.tenDayData} />
           </div>
          )  
      }
  }
}