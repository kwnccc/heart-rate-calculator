//@flow

export type ZoneType = {
  min: number,
  max: number
};

export type InputErrorType = {
  age: string,
  rhr: string
};

export type CalculatorFormType = {
  age: string,
  rhr: string,
  error: InputErrorType,
  isButtonEnabled: boolean,
  onChange: (name: string, value: string) => void,
  onSubmit: () => void
};

export type CalculatorResultType = {
  mhr: number,
  rrh: number,
  zones: Array<ZoneType>
};
