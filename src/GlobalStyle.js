import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
    margin:0;
    padding: 0;
  }

  ol,
  ul,
  li {
    list-style: none;
    margin: 0;
    padding:0;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote::before,
  blockquote::after,
  q::before,
  q::after {
    content: '';
    content: none;
  }

  
  /* allow easy overriding of box-sizing */
  *,
  *::before,
  *::after {
      box-sizing: inherit;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  
  html {
    box-sizing: border-box;
    background: #F7F7F7;
  }
  
  body {
    margin: 0;
    padding: 0;
    text-size-adjust: none;
    -webkit-font-smoothing: antialiased;
  }

  #root {
    height: 100%;
  }
  
  * {
    box-sizing: border-box;
    :focus{  
      box-shadow: none;
      outline: none;
    }
    :focus-within{  
      border-color: #7575B6;
      border-width: 2px;
    }
  }
`;

export default GlobalStyle;
