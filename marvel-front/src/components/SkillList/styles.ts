import { css, styled } from "styled-components";
import { ISkillList } from "./types";

export const Container = styled.div<ISkillList>`
  ${({ height, width }) =>
    css`
      height: ${height ?? "15rem"};
      width: ${width ?? "25rem"};
    `}
  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;
  justify-content: center;

  &::-webkit-scrollbar {
    display: none;
  }
`;
