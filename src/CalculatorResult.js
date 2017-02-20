import React, {PropTypes} from 'react';

import List from 'react-toolbox/lib/list/List';
import ListItem from 'react-toolbox/lib/list/ListItem';
import ListSubHeader from 'react-toolbox/lib/list/ListSubHeader';
import ListDivider from 'react-toolbox/lib/list/ListDivider';

const CalculatorResult = () => (
  <List ripple={false}>
    <ListSubHeader caption="Results" />
    <ListItem ripple={false} caption='Max Heart Rate' legend="195"/>
    <ListItem ripple={false} caption='Heart Rate Reserve' legend="195"/>
    <ListDivider />
    <ListItem ripple={false} caption='Zone 1' legend="195"/>
    <ListItem ripple={false} caption='Zone 2' legend="195"/>
    <ListItem ripple={false} caption='Zone 3' legend="195"/>
    <ListItem ripple={false} caption='Zone 4' legend="195"/>
    <ListItem ripple={false} caption='Zone 5' legend="195"/>
  </List>
);

export default CalculatorResult;
