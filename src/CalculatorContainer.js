import React from 'react';

import CalculatorLogic from './CalculatorLogic';
import CalculatorForm from './CalculatorForm';
import CalculatorResult from './CalculatorResult';

class CalculatorContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: {value: '', error: ''},
      rhr: {value: '', error: ''},
      isButtonEnabled: false,
      calculated: false
    };

    this._calculate = this._calculate.bind(this);
    this._validateInput = this._validateInput.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  _calculate() {
    let {mhr, rrh, zones} = CalculatorLogic(this.state.age.value, this.state.rhr.value);
    this.setState({...this.state, mhr, rrh, zones, calculated: true});
  }
  _validateInput(name, value) {
    let error;
    value = parseInt(value, 10);
    switch (name) {
      case 'age':
        if(value > 0 && value <= 100) {
          error = '';
        } else {
          error = 'You should try a more reasonable age: 1 - 100';
        }
        break;
      case 'rhr':
        if(value > 0 && value < 220) {
          error = '';
        } else {
          error = 'You should try a more reasonable Resting Heart Rate: 1 - 220';
        }
        break;
      default:
        error = '';
    }
    return error;
  }
  onChange(name, value) {
    const error = this._validateInput(name, value);

    const otherInput = name === 'age' ? 'rhr' : 'age';
    const isButtonEnabled = !!(value.length && !error.length
                          && this.state[otherInput].value.length
                          && !this.state[otherInput].error.length);

    this.setState({...this.state, [name]: {value, error}, isButtonEnabled});
  }
  onSubmit(e) {
    if(!this.state.isButtonEnabled) return;
    this._calculate();
  }
  render() {
    let result;
    if(this.state.calculated) {
      result =
        <section className="App-calculator-result">
          <CalculatorResult mhr={this.state.mhr} rrh={this.state.rrh} zones={this.state.zones} />
        </section>;
    }
    return (
      <section className="App-calculator">
        <section className="App-calculator-form">
          <CalculatorForm {...this.state} onChange={this.onChange} onSubmit={this.onSubmit} />
        </section>
        {result}
      </section>
    )
  }
}

export default CalculatorContainer;
