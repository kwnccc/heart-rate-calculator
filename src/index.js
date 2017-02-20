import React from 'react';
import ReactDOM from 'react-dom';
import theme from '../public/toolbox/theme.js';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';

import App from './App';
import './index.css';
import '../public/toolbox/theme.css';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
