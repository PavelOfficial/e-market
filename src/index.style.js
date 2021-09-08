import { createGlobalStyle } from 'styled-components';

export const GlobalLayoutStyle = createGlobalStyle`

  body {
    margin: 0;
    font: 14px Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  html,
  body,
  #root {
    height: 100%;
  }

`;

export default GlobalLayoutStyle;
