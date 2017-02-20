import React, { Component } from 'react';

import AppBar from 'react-toolbox/lib/app_bar/AppBar';

import CalculatorForm from './CalculatorForm.js';
import CalculatorResult from './CalculatorResult.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar title='Heart Rate Calculator'></AppBar>
        <section className="App-calculator">
          <section className="App-calculator-form">
            <CalculatorForm />
          </section>
          <section className="App-calculator-result">
            <CalculatorResult />
          </section>
        </section>
      </div>
    );
  }
}

export default App;
