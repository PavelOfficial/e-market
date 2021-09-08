import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './ui/app';
import { GlobalLayoutStyle } from './index.style';
import { store } from './redux/store';

ReactDOM.render(
    <Provider store={store}>
        <App />
        <GlobalLayoutStyle />
    </Provider>,
    document.getElementById('root')
);
