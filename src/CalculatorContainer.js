import React from 'react';

import CalculatorLogic from './CalculatorLogic';
import CalculatorForm from './CalculatorForm';
import CalculatorResult from './CalculatorResult';

class CalculatorContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: '',
      rhr: '',
      error: {
        age: '',
        rhr: '',
      },
      isButtonEnabled: false,
      calculated: false
    };

    this._calculate = this._calculate.bind(this);
    this._validateInput = this._validateInput.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  _calculate() {
    let {mhr, rrh, zones} = CalculatorLogic(this.state.age, this.state.rhr);
    this.setState({...this.state, mhr, rrh, zones, calculated: true});
  }
  _validateInput(name, value) {
    let error = Object.assign({}, this.state.error);
    value = parseInt(value, 10);
    switch (name) {
      case 'age':
        if(value > 0 && value <= 100) {
          error.age = '';
        } else {
          error.age = 'You should try a more reasonable age: 1 - 100';
        }
        break;
      case 'rhr':
        if(value > 0 && value < 220) {
          error.rhr = '';
        } else {
          error.rhr = 'You should try a more reasonable Resting Heart Rate: 1 - 220';
        }
        break;
      default:
        error = {age:'', rhr: ''};
    }
    return error;
  }
  onChange(name, value) {
    const error = this._validateInput(name, value);

    const otherInput = name === 'age' ? 'rhr' : 'age';
    const isButtonEnabled = value.length > 0 && error[name].length === 0
                          && this.state[otherInput].length > 0
                          && this.state.error[otherInput].length === 0;

    this.setState({...this.state, [name]: value, error, isButtonEnabled});
  }
  onSubmit(e) {
    if(!this.state.isButtonEnabled) return;
    this._calculate();
  }
  render() {
    const { age, rhr, error, mhr, rrh, zones, isButtonEnabled, calculated } = this.state;
    let result;
    if(calculated) {
      result =
        <section className="App-calculator-result">
          <CalculatorResult mhr={mhr} rrh={rrh} zones={zones} />
        </section>;
    }
    return (
      <section className="App-calculator">
        <section className="App-calculator-form">
          <CalculatorForm age={age} rhr={rhr} error={error} isButtonEnabled={isButtonEnabled}
            onChange={this.onChange} onSubmit={this.onSubmit} />
        </section>
        {result}
      </section>
    )
  }
}

export default CalculatorContainer;
