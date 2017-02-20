import React from 'react';

import Button from 'react-toolbox/lib/button/Button';
import Input from 'react-toolbox/lib/input/Input';

class CalculatorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: {value: '', error: ''},
      rhr: {value: '', error: ''},
      buttonDisabled: true
    };
    this.validateInput = this.validateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  validateInput(name, value) {
    let error;
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
  handleChange(name, value) {
    let validation = this.validateInput(name, value);
    let buttonDisabled = !!validation;
    this.setState({...this.state, [name]: {value, error: validation}, buttonDisabled});
  }
  handleSubmit(e) {
    e.preventDefault();
    if(this.state.buttonDisabled) return;
    this.props.onSubmit(this.state.age.value, this.state.rhr.value);
  }
  render() {
    return (
      <div>
        <Input type='number' label='Age' name='age' value={this.state.age.value} error={this.state.age.error} onChange={this.handleChange.bind(this, 'age')} maxLength={3} />
        <Input type='number' label='Resting Heart Rate' name='rhr' value={this.state.rhr.value} error={this.state.rhr.error} onChange={this.handleChange.bind(this, 'rhr')} maxLength={3} />
        <Button raised primary disabled={this.state.buttonDisabled} onClick={this.handleSubmit}>Calculate</Button>
      </div>
    );
  }
};

CalculatorForm.propTypes = {
  onSubmit: React.PropTypes.func
}

export default CalculatorForm;
