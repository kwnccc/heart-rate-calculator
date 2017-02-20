import React from 'react';

import Button from 'react-toolbox/lib/button/Button';
import Input from 'react-toolbox/lib/input/Input';

class CalculatorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {age: '', rhr: ''};
  }
  handleChange(name, value) {
    this.setState({...this.state, [name]: value});
  }
  render() {
    return (
      <div>
        <Input type='number' label='Age' name='age' value={this.state.age} onChange={this.handleChange.bind(this, 'age')} maxLength={2} />
        <Input type='number' label='Resting Heart Rate' name='rhr' value={this.state.rhr} onChange={this.handleChange.bind(this, 'rhr')} maxLength={3} />
        <Button raised primary onClick={() => this.props.onSubmit(this.state.age, this.state.rhr)}>Calculate</Button>
      </div>
    );
  }
};

CalculatorForm.propTypes = {
  onSubmit: React.PropTypes.func
}

export default CalculatorForm;
