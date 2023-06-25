import { styled } from "styled-components";
import { colors } from "../../utils/colors";

export const PageButton = styled.button`
    padding: 0.5rem 2rem;
    color: ${colors.primary[1]};
    background-color: ${colors.primary[2]};
    font-size: 1.2rem;
    border-radius: 10px;
    
    text-transform: uppercase;
`;