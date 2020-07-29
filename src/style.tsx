import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: #181818;
        color: var(--white);
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Mulish",sans-serif;
    }

    :root {
        --primary: #2A7AE4;
        --black: #000000;
        --blackLighter: #9E9E9E;
        --grayLight: #F5F5F5;
        --grayMedium: #e5e5e5; 
        --white: #FFFFFF;
        --frontEnd: #6BD1FF;
        --backEnd: #00C86F;
    }

    a {
        color: inherit;
    }
`