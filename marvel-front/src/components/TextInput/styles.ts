import styled, { css } from "styled-components"
import { colors } from "../../utils/colors"

import { IStyledTextInput } from "./types"

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    gap: 4px;

    font-weight: 600;
    font-size: 1rem;
    line-height: 1.1rem;
    color: ${colors.danger[0]};
`

export const TextInput = styled.input <IStyledTextInput>`
    outline: none;
    box-shadow: none;
    border-radius: 5px;
    border: 1px solid ${colors.primary[0.1]};
    background: ${colors.primary[1]};
    color: ${colors.primary[0]};
    font-weight: 500;
    font-size: 1rem;
    padding: 0 0.5rem;

    &::placeholder {
        font-weight: 500;
        opacity: 0.6;
    }

    ${({ height, width }) =>
        css`
            height: ${height ?? '35px'};
            width: ${width ?? '250px'};
        `
    }
`