import { styled } from "styled-components";
import { colors } from "../../utils/colors";

export const Container = styled.header`
    width: 100%;

    nav {
        display: flex;
        width: 100%;
        
        button {
            flex: 1;
            border-radius: initial;
            color: ${colors.primary[0]};
            background-color: ${colors.primary[1]};
        }
    }
`;