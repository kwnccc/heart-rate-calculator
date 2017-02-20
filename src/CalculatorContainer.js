import React from 'react';

import CalculatorLogic from './CalculatorLogic';
import CalculatorForm from './CalculatorForm';
import CalculatorResult from './CalculatorResult';

class CalculatorContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {calculated: false};

    this.calculate = this.calculate.bind(this);
  }
  calculate(age, rhr) {
    let {mhr, rrh, zones} = CalculatorLogic(age, rhr);
    this.setState({...this.state, age, rhr, mhr, rrh, zones, calculated: true});
  }
  render() {
    let result;
    if(this.state.calculated) {
      result =
        <section className="App-calculator-result">
          <CalculatorResult mhr={this.state.mhr} rrh={this.state.rrh} zones={this.state.zones} />
        </section>;
    }
    return (
      <section className="App-calculator">
        <section className="App-calculator-form">
          <CalculatorForm onSubmit={this.calculate} />
        </section>
        {result}
      </section>
    )
  }
}

export default CalculatorContainer;
