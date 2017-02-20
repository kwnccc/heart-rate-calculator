import React, { Component } from 'react';

import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import Button from 'react-toolbox/lib/button/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar title='Heart Rate Calculator'></AppBar>
        <p>
          <Button raised primary>Hello World</Button>
        </p>
      </div>
    );
  }
}

export default App;
