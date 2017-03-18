import React from 'react';
import renderer from 'react-test-renderer';
import CalculatorResult from './CalculatorResult';

test('CalculatorResult renders with default values', () => {
  const tree = renderer.create(
    <CalculatorResult />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('CalculatorResult renders with prop values', () => {
  const tree = renderer.create(
    <CalculatorResult mhr={195} rrh={137} zones={[{min:105,max:122},{min:123,max:134}]}/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
