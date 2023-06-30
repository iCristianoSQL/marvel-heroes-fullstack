/* eslint-disable @typescript-eslint/ban-ts-comment */
import { MarvelServices } from "../../services/marvel";
import { SkillTag } from "./SkillTag";
import * as S from "./styles";
import { ISkillList } from "./types";
import { ISkills } from "../../utils/@types";

export const SkillList = ({ height, width, onSelect, ...rest }: ISkillList) => {
  const { data: skills } = MarvelServices.useGetSkills();

  const handleSkillSelect = (skill: ISkills) => {
    onSelect(skill);
  };

  return (
    // @ts-ignore
    <S.Container height={height} width={width} {...rest}>
      {skills?.skills.map((skill) => {
        return (
          <SkillTag
            description={skill.description}
            tooltipId={String(skill.id)}
            key={skill.id}
            color={skill.color}
            onClick={() => handleSkillSelect(skill)}
          >
            {skill.name}
          </SkillTag>
        );
      })}
    </S.Container>
  );
};
