import React from 'react';
import renderer from 'react-test-renderer';
import CalculatorContainer from './CalculatorContainer';

test('CalculatorContainer renders with default values', () => {
  const tree = renderer.create(
    <CalculatorContainer />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
