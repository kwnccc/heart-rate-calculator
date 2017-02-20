import React from 'react';

import Button from 'react-toolbox/lib/button/Button';
import Input from 'react-toolbox/lib/input/Input';

const CalculatorForm = () => (
  <div>
    <Input type='number' label='Age' name='age' maxLength={2} />
    <Input type='number' label='Resting Heart Rate' name='rhr' maxLength={3} />
    <Button raised primary>Calculate</Button>
  </div>
);

export default CalculatorForm;
