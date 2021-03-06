import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle `
    :root {
        --background: #f0f2f5;
        --red: #E52E40;
        --green: #33CC95;
        --blue: #5429CC;

        --blue-light: #6933FF;

        --text-title: #363F5F;
        --text-body: #969CB3;

        --background: #F0F2F5;
        --shape: #FFFFFF;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%
        }

        @media (max-width: 720px) {
            font-size: 87.5%
        }
    }

    body {
        background: var(--background);
        --webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sanss-serif;
        font-weiht: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weith: 600;
    }

    button {
        cursor: pointer;
    }

    [disable] {
        opacity: 0.6;
        curson: not-allowed;
    }
`