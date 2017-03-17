//@flow

import React from 'react';

import Button from 'react-toolbox/lib/button/Button';
import Input from 'react-toolbox/lib/input/Input';

import type { CalculatorFormType } from './../CalculatorTypes';

const CalculatorForm = ({age='', rhr='', error={age:'', rhr:''}, isButtonEnabled=false, onChange, onSubmit}: CalculatorFormType) => {
  const onChangeAge = onChange.bind(this, 'age');
  const onChangeRhr = onChange.bind(this, 'rhr');
  return (
    <div>
      <Input type='number' label='Age' name='age' value={age} error={error.age} onChange={onChangeAge} maxLength={3} />
      <Input type='number' label='Resting Heart Rate' name='rhr' value={rhr} error={error.rhr} onChange={onChangeRhr} maxLength={3} />
      <Button raised primary disabled={!isButtonEnabled} onClick={onSubmit}>Calculate</Button>
    </div>
  );
};

export default CalculatorForm;
