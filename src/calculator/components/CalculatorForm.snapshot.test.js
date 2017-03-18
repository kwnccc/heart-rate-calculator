import React from 'react';
import renderer from 'react-test-renderer';
import CalculatorForm from './CalculatorForm';

test('CalculatorForm defaults to specific values', () => {
  const onChange = jest.fn();
  const onSubmit = jest.fn();

  const tree = renderer.create(
    <CalculatorForm onChange={onChange} onSubmit={onSubmit} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('CalculatorForm props values', () => {
  const onChange = jest.fn();
  const onSubmit = jest.fn();

  const component = renderer.create(
    <CalculatorForm age={'26'} rhr={'58'} isButtonEnabled={true} onChange={onChange} onSubmit={onSubmit} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('CalculatorForm props values error', () => {
  const onChange = jest.fn();
  const onSubmit = jest.fn();

  const error = {age:'error age', rhr: ''};

  const component = renderer.create(
    <CalculatorForm
      age={'126'} rhr={'58'}
      error={error}
      isButtonEnabled={false}
      onChange={onChange}
      onSubmit={onSubmit} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
