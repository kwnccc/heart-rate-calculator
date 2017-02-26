import React from 'react';
import { shallow } from 'enzyme';

import CalculatorForm from './CalculatorForm';
import Input from 'react-toolbox/lib/input/Input';
import Button from 'react-toolbox/lib/button/Button';

describe('on initilization', () => {
  it('should render 2 Input and 1 Button Components', () => {
    let wrapper = shallow(<CalculatorForm />);
    expect(wrapper.find(Input).length).toBe(2);
    expect(wrapper.find(Button).length).toBe(1);
  });

  it('should render components with correct props based on initial state', () => {
    let wrapper = shallow(<CalculatorForm />);

    expect(wrapper.find(Input).at(0).prop('value')).toBe('');
    expect(wrapper.find(Input).at(1).prop('value')).toBe('');
    expect(wrapper.find(Button).prop('disabled')).toBe(true);
  });
});

it('should update components props according to state', () => {
  let wrapper = shallow(<CalculatorForm />);
  wrapper.setState({
    age: {value: '25', error: ''},
    rhr: {value: '59', error: ''},
    isButtonEnabled: true
  });

  expect(wrapper.find(Input).at(0).prop('value')).toBe('25');
  expect(wrapper.find(Input).at(1).prop('value')).toBe('59');
  expect(wrapper.find(Button).prop('disabled')).toBe(false);
});

describe('Input components', () => {
  it('should update state and components according to input', () => {
    let wrapper = shallow(<CalculatorForm />);

    wrapper.find(Input).at(0).prop('onChange')('26');
    wrapper.find(Input).at(1).prop('onChange')('59');

    expect(wrapper.state('age')).toEqual({value:'26', error:''});
    expect(wrapper.state('rhr')).toEqual({value:'59', error:''});

    expect(wrapper.find(Input).at(0).prop('value')).toBe('26');
    expect(wrapper.find(Input).at(1).prop('value')).toBe('59');
  });

  it('should update components with error', () => {
    let wrapper = shallow(<CalculatorForm />);

    wrapper.find(Input).at(0).prop('onChange')('260');
    wrapper.find(Input).at(1).prop('onChange')('59');

    expect(wrapper.state('age').error.length).toBeGreaterThan(0);
    expect(wrapper.state('rhr').error.length).toBe(0);

    wrapper.find(Input).at(0).prop('onChange')('26');
    wrapper.find(Input).at(1).prop('onChange')('590');

    expect(wrapper.state('age').error.length).toBe(0);
    expect(wrapper.state('rhr').error.length).toBeGreaterThan(0);
  });
});

describe('Button', () => {

  describe('should be disabled', () => {

    it('on component initilization', () => {
      let wrapper = shallow(<CalculatorForm />);
      const button = wrapper.find(Button);
      expect(button.prop('disabled')).toBe(true);
    });

    it('when either input value is empty or invalid', () => {
      let wrapper = shallow(<CalculatorForm />);

      // empty input values
      wrapper.find(Input).at(0).prop('onChange')('');
      wrapper.find(Input).at(1).prop('onChange')('59');
      expect(wrapper.find(Button).prop('disabled')).toBe(true);

      wrapper.find(Input).at(0).prop('onChange')('26');
      wrapper.find(Input).at(1).prop('onChange')('');
      expect(wrapper.find(Button).prop('disabled')).toBe(true);

      // invalid input values
      wrapper.find(Input).at(0).prop('onChange')('260');
      wrapper.find(Input).at(1).prop('onChange')('59');
      expect(wrapper.find(Button).prop('disabled')).toBe(true);

      wrapper.find(Input).at(0).prop('onChange')('26');
      wrapper.find(Input).at(1).prop('onChange')('590');
      expect(wrapper.find(Button).prop('disabled')).toBe(true);
    });
  });
  describe('shouldn\'t be disabled', () => {
    it('when input values are valid', () => {
      let wrapper = shallow(<CalculatorForm />);

      expect(wrapper.find(Button).prop('disabled')).toBe(true);

      wrapper.find(Input).at(0).prop('onChange')('26');
      wrapper.find(Input).at(1).prop('onChange')('59');
      expect(wrapper.find(Input).at(1).prop('value')).toBe('59');
      expect(wrapper.find(Button).prop('disabled')).toBe(false);
    });
  });
  describe('on click onSubmit action', () => {
    it('should not be triggered when button is disabled', () => {
      let onSubmit = jest.fn();
      let wrapper = shallow(<CalculatorForm onSubmit={onSubmit} />);

      expect(wrapper.find(Button).prop('disabled')).toBe(true);

      wrapper.find(Button).simulate('click');
      expect(onSubmit).not.toHaveBeenCalled();
    });
    it('should be trigger when button is enabled', () => {
      let onSubmit = jest.fn();
      let wrapper = shallow(<CalculatorForm onSubmit={onSubmit} />);

      expect(wrapper.find(Button).prop('disabled')).toBe(true);

      wrapper.find(Input).at(0).prop('onChange')('26');
      wrapper.find(Input).at(1).prop('onChange')('59');

      wrapper.find(Button).simulate('click');
      expect(onSubmit).toHaveBeenCalledWith('26', '59');
    });
  });
});
