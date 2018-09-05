import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome'

export default class App extends Component {
  constructor() {
    super();

  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <img className="logo" src={require("./images/weathrly-logo.png")}/>
        </header>
        <Welcome />
      </div>
    );
  }
}

