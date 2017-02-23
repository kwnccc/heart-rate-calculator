import React from 'react';
import { shallow, mount } from 'enzyme';

import CalculatorForm from './CalculatorForm';

it('should render 2 Input and 1 Button Components', () => {
  let wrapper = mount(<CalculatorForm />);
  expect(wrapper.find('Input').length).toBe(2);
  expect(wrapper.find('Button').length).toBe(1);
});

it('should render Components with correct initial values', () => {
  let wrapper = mount(<CalculatorForm />);
  let inputAge = wrapper.find('Input').at(0);
  let inputRhr = wrapper.find('Input').at(1);
  let button = wrapper.find('Button');

  expect(inputAge.prop('value')).toBe('');
  expect(inputRhr.prop('value')).toBe('');
  expect(button.prop('disabled')).toBe(true);
});

it('should not trigger onSubmit action on "click" when disabled', () => {
  let onSubmit = jest.fn();
  let wrapper = mount(<CalculatorForm onSubmit={onSubmit} />);
  let button = wrapper.find('Button');

  expect(button.prop('disabled')).toBe(true);

  button.simulate('click');
  expect(onSubmit).not.toHaveBeenCalled();
});
