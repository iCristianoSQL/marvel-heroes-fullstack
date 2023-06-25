import styled from 'styled-components';
import { colors } from '../../utils/colors';

export const Footer = styled.footer`
    width: 100%;
    height: 5rem;
    padding: 0 2rem;
    border-top: 1px solid ${colors.primary[1]};
    position: relative;

    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1rem;

    img {
        width: 2.5rem;
    }

    span {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
    }
`;