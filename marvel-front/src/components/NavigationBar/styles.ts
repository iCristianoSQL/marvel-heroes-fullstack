import { styled } from "styled-components";
import { colors } from "../../utils/colors";

export const Header = styled.header`
    height: 5rem;
    width: 100%;
    padding: 0 2rem;
    position: fixed;
    z-index: 1;
    background-color: ${colors.primary[0.1]};

    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
        height: 100%;
    }
`;

export const Nav = styled.nav`
    width: fit-content;
    height: 100%;

    display: flex;
    align-items: center;
    gap: 1rem;
    
    a {
        font-weight: 500;
        font-size: 1.25rem;
        transition: 0.2s;
        font-family: 'Inter', sans-serif;

        &:hover {
            border-bottom: 2px solid ${colors.danger[0]};
            color: ${colors.danger[0]};
        }
    }
`;