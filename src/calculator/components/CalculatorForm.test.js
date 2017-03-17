import React from 'react';
import { shallow } from 'enzyme';

import CalculatorForm from './CalculatorForm';
import Button from 'react-toolbox/lib/button/Button';
import Input from 'react-toolbox/lib/input/Input';

describe('on initilization', () => {

  let wrapper;
  beforeEach(() => {
    const onChange = jest.fn();
    const onSubmit = jest.fn();
    wrapper = shallow(<CalculatorForm onChange={onChange} onSubmit={onSubmit} />);
  });

  it('should render 2 Input and 1 Button Components', () => {
    expect(wrapper.find(Input).length).toBe(2);
    expect(wrapper.find(Button).length).toBe(1);
  });

  it('should render components with correct props based on initial state', () => {
    expect(wrapper.find(Input).at(0).prop('value')).toBe('');
    expect(wrapper.find(Input).at(1).prop('value')).toBe('');
    expect(wrapper.find(Button).prop('disabled')).toBe(true);
  });

});

describe('on props parameters', () => {

  let wrapper, onChange, onSubmit;
  beforeEach(() => {
    const props = {
      age: '26',
      rhr: '59',
      error: {age:'', rhr:''},
      isButtonEnabled: true,
    };
    onChange = jest.fn();
    onSubmit = jest.fn();
    wrapper = shallow(<CalculatorForm {...props} onChange={onChange} onSubmit={onSubmit} />);
  });

  it('should render data according to props', () => {
    expect(wrapper.find(Input).at(0).prop('value')).toBe('26');
    expect(wrapper.find(Input).at(1).prop('value')).toBe('59');
    expect(wrapper.find(Button).prop('disabled')).toBe(false);
  });

  it('should trigger onChange action', () => {
    wrapper.find(Input).at(0).prop('onChange')('33');
    wrapper.find(Input).at(1).prop('onChange')('62');
    expect(onChange.mock.calls.length).toBe(2);
    expect(onChange.mock.calls[0]).toEqual(['age','33']);
    expect(onChange.mock.calls[1]).toEqual(['rhr','62']);
  });

  it('should trigger onSubmit action', () => {
    wrapper.find(Button).simulate('click');
    expect(onSubmit).toHaveBeenCalled();
  });

});
