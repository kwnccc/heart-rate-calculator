import React from 'react';

import List from 'react-toolbox/lib/list/List';
import ListItem from 'react-toolbox/lib/list/ListItem';
import ListSubHeader from 'react-toolbox/lib/list/ListSubHeader';
import ListDivider from 'react-toolbox/lib/list/ListDivider';

const CalculatorResult = ({mhr, rrh, zones}) => (
  <List ripple={false}>
    <ListSubHeader caption="Results" />
    <ListItem ripple={false} caption='Max Heart Rate' legend={`${mhr}`}/>
    <ListItem ripple={false} caption='Heart Rate Reserve' legend={`${rrh}`}/>
    <ListDivider />
    {zones.map((zone, i) => {
        return <ListItem key={i} ripple={false} caption={`Zone ${i+1}`} legend={`From ${zone.min} to ${zone.max}`} />
    })}
  </List>
);

CalculatorResult.propTypes = {
  mhr: React.PropTypes.number.isRequired,
  rrh: React.PropTypes.number.isRequired,
  zones: React.PropTypes.array.isRequired
};

export default CalculatorResult;
