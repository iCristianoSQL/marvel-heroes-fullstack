/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Tooltip } from "react-tooltip";
import * as S from "./styles";
import { ISkillTag } from "./types";

export const SkillTag = ({
  children,
  description,
  tooltipId,
  color,
  ...rest
}: ISkillTag) => {
  return (
    // @ts-ignore
    <S.Container
      data-tooltip-id={tooltipId}
      data-tooltip-content={description}
      color={color}
      {...rest}
    >
      <Tooltip id={tooltipId} place="top"/>
      {children}
    </S.Container>
  );
};
