//@flow

type ZoneType = {
  min: number,
  max: number
};

type InputErrorType = {
  age: string,
  rhr: string
};

import React from 'react';

import CalculatorLogic from './CalculatorLogic';
import CalculatorForm from './CalculatorForm';
import CalculatorResult from './CalculatorResult';

class CalculatorContainer extends React.Component {

  state: {
    age: string,
    rhr: string,
    mhr: string,
    rrh: string,
    zones: Array<ZoneType>,
    error: InputErrorType,
    isButtonEnabled: boolean,
    calculated: boolean
  };

  constructor(props: Object) {
    super(props);
    this.state = {
      age: '',
      rhr: '',
      mhr: '',
      rrh: '',
      zones: [],
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
  _calculate = () => {
    let age = parseInt(this.state.age, 10);
    let rhr = parseInt(this.state.rhr, 10);
    let {mhr, rrh, zones} = CalculatorLogic(age, rhr);
    this.setState({...this.state, mhr: mhr.toString(), rrh: rrh.toString(), zones, calculated: true});
  }
  _validateInput = (name: string, value: string): InputErrorType => {
    let error = Object.assign({}, this.state.error);
    let intValue = parseInt(value, 10);
    switch (name) {
      case 'age':
        if(intValue > 0 && intValue <= 100) {
          error.age = '';
        } else {
          error.age = 'You should try a more reasonable age: 1 - 100';
        }
        break;
      case 'rhr':
        if(intValue > 0 && intValue < 220) {
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
  onChange = (name: string, value: string) => {
    const error = this._validateInput(name, value);

    const otherInput = name === 'age' ? 'rhr' : 'age';
    const isButtonEnabled = value.length > 0 && error[name].length === 0
                          && this.state[otherInput].length > 0
                          && this.state.error[otherInput].length === 0;

    this.setState({...this.state, [name]: value, error, isButtonEnabled});
  }
  onSubmit = () => {
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
