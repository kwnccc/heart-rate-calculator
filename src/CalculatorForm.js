import React from 'react';

import Button from 'react-toolbox/lib/button/Button';
import Input from 'react-toolbox/lib/input/Input';

const CalculatorForm = ({age, rhr, isButtonEnabled, onChange, onSubmit}) => {
  const onChangeAge = onChange.bind(this, 'age');
  const onChangeRhr = onChange.bind(this, 'rhr');
  return (
    <div>
    <Input type='number' label='Age' name='age' value={age.value} error={age.error} onChange={onChangeAge} maxLength={3} />
    <Input type='number' label='Resting Heart Rate' name='rhr' value={rhr.value} error={rhr.error} onChange={onChangeRhr} maxLength={3} />
    <Button raised primary disabled={!isButtonEnabled} onClick={onSubmit}>Calculate</Button>
    </div>
  );
}

CalculatorForm.propTypes = {
  age: React.PropTypes.shape({
    value: React.PropTypes.string,
    error: React.PropTypes.string
  }),
  rhr: React.PropTypes.shape({
    value: React.PropTypes.string,
    error: React.PropTypes.string
  }),
  isButtonEnabled: React.PropTypes.bool,
  onChange: React.PropTypes.func.isRequired,
  onSubmit: React.PropTypes.func.isRequired
}

export default CalculatorForm;
