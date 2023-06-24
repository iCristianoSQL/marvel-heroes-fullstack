import { styled } from "styled-components";

export const Header = styled.header`
    height: 5rem;
    width: 100%;
    padding: 0 2rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
        height: 100%;
    }
`;

export const Nav = styled.nav`
    width: fit-content;
    background-color: black;
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
            border-bottom: 2px solid white;
        }
    }
`;