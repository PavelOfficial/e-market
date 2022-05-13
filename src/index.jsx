import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import './init';

import { App } from './ui/app';
import { GlobalLayoutStyle } from './index.style';
import { store } from './redux/store';
import { theme } from './theme';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalLayoutStyle />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
