import React from 'react';
import { shallow, mount } from 'enzyme';

import App from './App';

it('should render without crashing', () => {
  shallow(<App />);
});

it('should be selectable by class "App"', function() {
  const wrapper = shallow(<App />);
  expect(wrapper.is('.App')).toBe(true);
});

it('should render an AppBar Component', () => {
  const wrapper = mount(<App />);
  expect(wrapper.find('AppBar').length).toBe(1);
});

it('should render a CalculatorContainer Component', () => {
  const wrapper = mount(<App />);
  expect(wrapper.find('CalculatorContainer').length).toBe(1);
});
