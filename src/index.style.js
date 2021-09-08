import { createGlobalStyle } from 'styled-components';

export const GlobalLayoutStyle = createGlobalStyle`

  body {
    margin: 0;
    font: 14px Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    display: flex;
    justify-content: center;
  }

  html,
  body,
  #root {
    height: 100%;
  }
  
  #root {
    flex-basis: 40rem;
  }

`;

export default GlobalLayoutStyle;
