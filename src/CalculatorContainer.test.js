import React from 'react';
import { shallow } from 'enzyme';

import CalculatorContainer from './CalculatorContainer';
import CalculatorForm from './CalculatorForm';
import CalculatorResult from './CalculatorResult';

describe('on initilization', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CalculatorContainer />);
  });

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

describe('CalculatorForm onChange', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CalculatorContainer />);
  });

  it('should update state according to input', () => {
    wrapper.find(CalculatorForm).prop('onChange')('age','26');
    wrapper.find(CalculatorForm).prop('onChange')('rhr','59');

    expect(wrapper.state('age')).toBe('26');
    expect(wrapper.state('rhr')).toBe('59');
    expect(wrapper.state('error')).toEqual({age:'', rhr:''});
  });

  it('should update CalculatorForm according to input', () => {
    wrapper.find(CalculatorForm).prop('onChange')('age','26');
    wrapper.find(CalculatorForm).prop('onChange')('rhr','59');

    expect(wrapper.find(CalculatorForm).prop('age')).toBe('26');
    expect(wrapper.find(CalculatorForm).prop('rhr')).toBe('59');
  });

  it('should update component\'s error', () => {
    wrapper.find(CalculatorForm).prop('onChange')('age','260');
    wrapper.find(CalculatorForm).prop('onChange')('rhr','59');

    expect(wrapper.state('error').age.length).toBeGreaterThan(0);
    expect(wrapper.state('error').rhr.length).toBe(0);

    wrapper.find(CalculatorForm).prop('onChange')('age','26');
    wrapper.find(CalculatorForm).prop('onChange')('rhr','590');

    expect(wrapper.state('error').age.length).toBe(0);
    expect(wrapper.state('error').rhr.length).toBeGreaterThan(0);
  });

  it('should update component\'s isButtonEnabled to true', () => {
    // valid input values
    wrapper.find(CalculatorForm).prop('onChange')('age','26');
    wrapper.find(CalculatorForm).prop('onChange')('rhr','59');
    expect(wrapper.state('isButtonEnabled')).toBe(true);
  });

  it('should update component\'s isButtonEnabled to false', () => {
    // empty input values
    wrapper.find(CalculatorForm).prop('onChange')('age','');
    wrapper.find(CalculatorForm).prop('onChange')('rhr','59');
    expect(wrapper.state('isButtonEnabled')).toBe(false);

    wrapper.find(CalculatorForm).prop('onChange')('age','26');
    wrapper.find(CalculatorForm).prop('onChange')('rhr','');
    expect(wrapper.state('isButtonEnabled')).toBe(false);

    // invalid input values
    wrapper.find(CalculatorForm).prop('onChange')('age','260');
    wrapper.find(CalculatorForm).prop('onChange')('rhr','59');
    expect(wrapper.state('isButtonEnabled')).toBe(false);

    wrapper.find(CalculatorForm).prop('onChange')('age','26');
    wrapper.find(CalculatorForm).prop('onChange')('rhr','590');
    expect(wrapper.state('isButtonEnabled')).toBe(false);
  });
});

describe('CalculatorForm onSubmit', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CalculatorContainer />);
  });

  it('shouldn\'t trigger calculate when isButtonEnabled is false', () => {
    wrapper.setState({...wrapper.state(), isButtonEnabled: false});
    wrapper.find(CalculatorForm).prop('onSubmit')();
    expect(wrapper.state('calculated')).toBe(false);
  });

  it('should trigger calculate when isButtonEnabled is true', () => {
    wrapper.setState({...wrapper.state(), age:'26', rhr: '59', isButtonEnabled: true});
    wrapper.find(CalculatorForm).prop('onSubmit')();
    expect(wrapper.state('calculated')).toBe(true);
  });
});

describe('calculation', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CalculatorContainer />);
    wrapper.setState({...wrapper.state(), age:'26', rhr: '59', isButtonEnabled: true});
    wrapper.find(CalculatorForm).prop('onSubmit')();
  });

  it('should update component\'s state', () => {
    expect(wrapper.state('mhr')).toBe('194');
    expect(wrapper.state('rrh')).toBe('135');
    expect(wrapper.state('zones').length).toBe(5);
    expect(wrapper.state('calculated')).toBe(true);
  });

  it('should trigger CalculatorResult display', () => {
    expect(wrapper.find(CalculatorResult).length).toBe(1);
  });

  it('should update CalculatorResult props', () => {
    const resultComp = wrapper.find(CalculatorResult);
    expect(resultComp.prop('mhr')).toBe('194');
    expect(resultComp.prop('rrh')).toBe('135');
    expect(resultComp.prop('zones').length).toBe(5);
  });
});
