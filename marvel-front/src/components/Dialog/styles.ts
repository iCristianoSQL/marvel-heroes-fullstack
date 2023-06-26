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

    .box-close-modal {
        width: 100%;
        display: flex;
        justify-content: end;

        button {
            svg {
                fill: ${colors.primary[2]};
                font-size: 1rem;
            }
        }
    }
`;