//@flow

import React, { Component } from 'react';

import AppBar from 'react-toolbox/lib/app_bar/AppBar';

import CalculatorContainer from './CalculatorContainer.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar title='Karvonen Heart Rate Calculator' />
        <CalculatorContainer />
      </div>
    );
  }
}

export default App;
