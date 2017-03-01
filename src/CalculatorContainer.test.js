import React from 'react';
import { shallow } from 'enzyme';

import CalculatorContainer from './CalculatorContainer';
import CalculatorForm from './CalculatorForm';
import CalculatorResult from './CalculatorResult';

describe('on initilization', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CalculatorContainer />);
  })

  it('should render a section with specific class', () => {
    expect(wrapper.is('section')).toBe(true);
    expect(wrapper.is('.App-calculator')).toBe(true);
  });

  it('should render a CalculatorForm component', () => {
    expect(wrapper.find(CalculatorForm).length).toBe(1);
  });

  it('shouldn\'t render a CalculatorResult component', () => {
    expect(wrapper.find(CalculatorResult).length).toBe(0);
  });

  it('should initiate the state', () => {
    expect(wrapper.state('age')).toBe('');
    expect(wrapper.state('rhr')).toBe('');
    expect(wrapper.state('error')).toEqual({age: '', rhr: ''});
    expect(wrapper.state('isButtonEnabled')).toBe(false);
    expect(wrapper.state('calculated')).toBe(false);
  });

  it('should render components with correct props based on initial state', () => {
    const form = wrapper.find(CalculatorForm);
    expect(form.prop('age')).toBe('');
    expect(form.prop('rhr')).toBe('');
    expect(form.prop('error')).toEqual({age: '', rhr: ''});
    expect(form.prop('isButtonEnabled')).toBe(false);
  });
});
