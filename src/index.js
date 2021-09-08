import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { GlobalLayoutStyle } from './index.style';

ReactDOM.render(
    <React.StrictMode>
        <App />
        <GlobalLayoutStyle />
    </React.StrictMode>,
    document.getElementById('root')
);
