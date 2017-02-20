import CalculatorLogic from './CalculatorLogic';

it('should return default heart rate values', () => {
  let actual = CalculatorLogic();
  expect(actual.mhr).toEqual(220);
  expect(actual.rrh).toEqual(220);
});

it('should return correct heart rate values', () => {
  let actual = CalculatorLogic(26, 60);
  expect(actual.mhr).toEqual(194);
  expect(actual.rrh).toEqual(134);
});

it('should return correct heart rate values with strings parameters', () => {
  let actual = CalculatorLogic('26', '60');
  expect(actual.mhr).toEqual(194);
  expect(actual.rrh).toEqual(134);
});

it('should return correct heart rate zones', () => {
  let actual = CalculatorLogic(26, 60);
  let expected = [{"max": 140, "min": 127}, {"max": 153, "min": 141}, {"max": 167, "min": 155}, {"max": 184, "min": 168}, {"max": 194, "min": 185}];
  expect(actual.zones).toEqual(expected);
});
