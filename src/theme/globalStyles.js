import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
    html{
        height: 100%;
        color: #FFF;
        font-family: 'Harry Potter', monospace;
        font-size: 100%;
        background-color: #2F2F2F;

    }
    body{
        margin: 0 auto;
         max-width: 1200px;
    }
    * {
        padding: 0;
        margin: 0;
    }
    a{
        text-decoration: none;
        color: white;
    }
`;

export default GlobalStyle;