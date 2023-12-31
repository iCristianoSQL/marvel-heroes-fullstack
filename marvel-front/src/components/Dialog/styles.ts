import { css, styled } from "styled-components";
import { colors } from "../../utils/colors";
import { IDialogStyles } from "./types";

export const DialogContainer = styled.dialog<IDialogStyles>`
    ${({ height, width }) =>
        css`
            height: ${height ?? '45rem'};
            width: ${width ?? '35rem'};
        `
    }
    padding: 0.5rem;
    border-radius: 1rem;
    margin: auto;
    background-color: ${colors.primary[0]};
    border-width: 2px;
    border-style: solid;
    border-image: linear-gradient(to bottom, blue, red) 1;

    .box-close-modal {
        width: 100%;
        display: flex;
        justify-content: end;

        button {
            background-color: transparent;
            svg {
                fill: ${colors.primary[1]};
                font-size: 1rem;
            }
        }
    }
`;