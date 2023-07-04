import { ExecutionProps, createGlobalStyle, styled } from 'styled-components'
import { colors } from '../utils/colors';

export const GlobalStyle: React.NamedExoticComponent<ExecutionProps & TemplateStringsArray | any> = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box !important;
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
        background: ${colors.primary[0]};
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

    .embla {
        --slide-spacing: 1rem;
        --slide-size: 100%;
        --slide-height: 19rem;
    }

    .embla__viewport {
        overflow: hidden;
    }

    .embla__container {
        backface-visibility: hidden;
        display: flex;
        touch-action: pan-y;
        flex-direction: row;
        height: auto;
        margin-left: calc(var(--slide-spacing) * -1);
    }

    .embla__slide {
        flex: 0 0 var(--slide-size);
        min-width: 0;
        padding-left: var(--slide-spacing);
        position: relative;
    }

    .embla__slide__img {
        display: block;
        height: var(--slide-height);
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }

    .embla__slide__number {
        width: 4.6rem;
        height: 4.6rem;
        z-index: 1;
        position: absolute;
        top: 0.6rem;
        right: 0.6rem;
        border-radius: 50%;
        background-color: rgba(var(--background-site-rgb-value), 0.85);
        line-height: 4.6rem;
        font-weight: 900;
        text-align: center;
        pointer-events: none;
    }
    .embla__slide__number > span {
        color: var(--brand-primary);
        background-image: linear-gradient(
            45deg,
            var(--brand-primary),
            var(--brand-secondary)
        );
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 1.6rem;
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }

    .sandbox {
        width: 100%;
    }

    @media (min-width: 750px) {
        .sandbox {
            margin-left: auto;
            margin-right: auto;
            max-width: 67rem;
        }
    }

    .sandbox__carousel {
        position: relative;
        background-color: var(--background-code);
    }

    @media (max-width: 749px) {
        .sandbox__carousel {
            border-top: 0.1rem solid var(--detail-low-contrast);
            border-bottom: 0.1rem solid var(--detail-low-contrast);
        }
    }

    @media (max-width: 696px) {
        .sandbox__carousel {
            display: none;
        }
    }

    @media (min-width: 750px) {
        .sandbox__carousel {
            border-radius: 0.4rem;
            border: 0.1rem solid var(--detail-low-contrast);
        }
    }

    .sandbox__header {
        font-size: 2rem;
        font-weight: 700;
        text-align: center;
        padding: 4rem 2rem 2rem 2rem;
    }

    .sandbox__footer {
        display: flex;
        justify-content: center;
        padding: 2rem 2rem 4rem 2rem;
    }

    .sandbox__footer__link {
        display: flex;
        align-items: center;
        background-color: transparent;
        text-decoration: none;
        text-align: center;
        font-weight: 700;
        color: var(--text-low-contrast);
        font-size: 1.4rem;
    }
    
    .sandbox__footer__link__svg {
        display: block;
        width: 2rem;
        height: 2rem;
        margin-right: 1rem;
        fill: currentColor;
    }

    ::-webkit-scrollbar {
        width: 3px;
    }

    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
        background: linear-gradient(to bottom, blue, red);
        border-radius: 6px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(to bottom, darkblue, darkred);
    }
`;

export const PageSection = styled.section`
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
    padding: 0px 85px;
    margin-top: 5.5rem;
`;