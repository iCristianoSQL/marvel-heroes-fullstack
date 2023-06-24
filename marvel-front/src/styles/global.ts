import { ExecutionProps, createGlobalStyle } from 'styled-components'

export const GlobalStyle: React.NamedExoticComponent<ExecutionProps & TemplateStringsArray | any> = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;