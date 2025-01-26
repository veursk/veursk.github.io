import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
    line-height: 1.5;
    background-color: #f5f5f5;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;

export default GlobalStyle;
