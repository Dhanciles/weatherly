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
        sevenHourData: {}, 
        tenDayData: {},
        city: '',
        state: ''
      }
      this.takeNameAndLocation = this.takeNameAndLocation.bind(this); 
  }

  takeNameAndLocation(name, location) {
    this.setState({userName: name, location: location})
  }

  cleanLocation(location) {
    if (location.includes(',')) {
    let cleanLocation = location.split(',')
    let cleanCity = cleanLocation[0].trim()
    let cleanState = cleanLocation[1].trim()

    this.callApi(cleanCity, cleanState)
    this.sevenHourApiCall(cleanCity, cleanState)
  } else {
    console.log('poop')

  }
   
  }

  // getZipCode(location) {
    
  // }

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

  componentDidUpdate() {
    this.cleanLocation(this.state.location)
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
            <header className="App-header">
              <img className="logo" src={require("./images/weathrly-logo.png")}/>
            </header>
            <WelcomeUser userName={this.state.userName}/>
            <CurrentWeather weatherData={this.state.currentWeatherData}
                            cityData={this.state.city}
                            stateData={this.state.state} />
            <div className="seven-hours">
              <SevenHour sevenHourData={this.state.sevenHourData} />
            </div>
            <TenDay tenDayData={data} />
           </div>
          )  
      }
  }
}