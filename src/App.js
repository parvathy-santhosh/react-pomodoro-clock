import React, { Component } from 'react';
import Clock from './clock.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1> Pomodoro Clock </h1>
        <hr className="hr" />
        <Clock />
        <hr className="hr" />
        <small>parvathy-santhosh 2018</small>
        </header>
      </div>
    );
  }
}

export default App;
