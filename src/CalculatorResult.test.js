import React from 'react';
import { shallow } from 'enzyme';

import CalculatorResult from './CalculatorResult';
import List from 'react-toolbox/lib/list/List';
import ListItem from 'react-toolbox/lib/list/ListItem';
import ListSubHeader from 'react-toolbox/lib/list/ListSubHeader';
import ListDivider from 'react-toolbox/lib/list/ListDivider';

it('should render correct component', () => {
  const mockedProps = {
    mhr: '195',
    rrh: '135',
    zones: [
      {min:90, max:110},
      {min:111, max:123},
      {min:124, max:145},
      {min:146, max:177}
    ]
  };
  const wrapper = shallow(<CalculatorResult {...mockedProps} />);
  expect(wrapper.find(List).length).toBe(1);
  expect(wrapper.find(ListSubHeader).length).toBe(1);
  expect(wrapper.find(ListItem).length).toBe(6);
});
