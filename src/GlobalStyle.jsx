import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Noto Sans', sans-serif;
    }

    body{
        background-color: #1E1E1E;
        color: #f5f5f5;
        min-height: 100vh;
    }
`;

export default GlobalStyle;
