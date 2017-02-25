import React from 'react';

import Button from 'react-toolbox/lib/button/Button';
import Input from 'react-toolbox/lib/input/Input';

class CalculatorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: {value: '', error: ''},
      rhr: {value: '', error: ''},
      isButtonEnabled: false
    };
    this.validateInput = this.validateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  validateInput(name, value) {
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
  handleChange(name, value) {
    const error = this.validateInput(name, value);

    const otherInput = name === 'age' ? 'rhr' : 'age';
    const isButtonEnabled = value.length && !error.length
                          && this.state[otherInput].value.length
                          && !this.state[otherInput].error.length

    this.setState({...this.state, [name]: {value, error}, isButtonEnabled});
  }
  handleSubmit(e) {
    if(!this.state.isButtonEnabled) return;
    this.props.onSubmit(this.state.age.value, this.state.rhr.value);
  }
  render() {
    return (
      <div>
        <Input type='number' label='Age' name='age' value={this.state.age.value} error={this.state.age.error} onChange={this.handleChange.bind(this, 'age')} maxLength={3} />
        <Input type='number' label='Resting Heart Rate' name='rhr' value={this.state.rhr.value} error={this.state.rhr.error} onChange={this.handleChange.bind(this, 'rhr')} maxLength={3} />
        <Button raised primary disabled={!this.state.isButtonEnabled} onClick={this.handleSubmit}>Calculate</Button>
      </div>
    );
  }
};

CalculatorForm.propTypes = {
  onSubmit: React.PropTypes.func
}

export default CalculatorForm;
