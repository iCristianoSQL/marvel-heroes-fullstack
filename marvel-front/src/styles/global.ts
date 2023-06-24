import { ExecutionProps, createGlobalStyle } from 'styled-components'
import { colors } from '../utils/colors';

export const GlobalStyle: React.NamedExoticComponent<ExecutionProps & TemplateStringsArray | any> = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
        color: ${colors.primary[1]};
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Inter', sans-serif !important;
        font-weight: 600;
        color: ${colors.danger[0]} !important;
    }

    body, html {
        height: 100vh;
        width: 100vw;
    }

    html {
        @media(max-width: 1099px){
        font-size: 93.75%;
        }

        @media(max-width: 720px){
        font-size: 87.5%;
        }
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    button {
        border: none;
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }
`;