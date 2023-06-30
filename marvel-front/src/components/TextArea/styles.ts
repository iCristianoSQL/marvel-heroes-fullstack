import styled, { css } from "styled-components";
import { colors } from "../../utils/colors";

import { ITextAreaStyle } from "./types";

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    gap: 4px;

    font-weight: 600;
    font-size: 1rem;
    line-height: 1.1rem;
    color: ${colors.danger[0]};
`

export const Text = styled.textarea<ITextAreaStyle>`
    padding: 0px 0.5rem;
    width: 95%;
    height: 75px;

    ${({ height, width }) =>
        css`
            height: ${height ?? '75px'};
            width: ${width ?? '95%'};
        `
    }

    background: ${colors.primary[1]};
    outline: none;
    box-shadow: none;
    border-radius: 5px;
    border: 1px solid ${colors.primary[0.1]};
    resize: none;

    font-weight: 500;
    font-size: 1rem;
    line-height: 1.1rem;
    color: ${colors.primary[0]};

    &::placeholder {
        font-weight: 500;
        opacity: 0.6;
    }
`