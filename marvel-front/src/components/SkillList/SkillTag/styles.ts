import { css, styled } from "styled-components";
import { ISkillTag } from "./types";
import { transparentize } from "polished";

export const Container = styled.div<ISkillTag>`
  ${({ color }) =>
    css`
      color: ${color};
      background-color: ${transparentize(0.7, color)};
    `}
  width: fit-content;
  height: fit-content;
  padding: 0.2rem 0.4rem;
  border-radius: 0.8rem;
  font-size: 1rem;
  margin: 0.2rem;
  cursor: pointer;
`;
