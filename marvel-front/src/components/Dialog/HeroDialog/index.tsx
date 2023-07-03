import { forwardRef } from "react";
import Dialog from "..";
import * as S from "./styles";
import { IChampionDialog } from "./types";
import { SkillTag } from "../../SkillList/SkillTag";
import { ISkills } from "../../../utils/@types";

const HeroDialog = forwardRef<HTMLDialogElement, IChampionDialog>(
  ({ hero }, ref) => {
    const skills: ISkills[] = Array.isArray(hero.skills) ? hero.skills : [];
    const isEmptyTeam = Object.values(hero.team_info).every(
      (value) => value === null
    );

    return (
      <Dialog ref={ref}>
        <S.Container>
          <div className="image-relative-box">
            <S.Image hero={hero} />
            <span>
              <h1>{hero.name}</h1>
            </span>
          </div>
          <div className="description-box">
            <h2>Descrição</h2>
            <p>{hero.description}</p>
          </div>
          {isEmptyTeam ? null : (
            <div className="team-box">
              <h2>Equipe</h2>
              <strong>{hero.team_info.name ?? ""}</strong>
              <p>{hero.team_info.description ?? ""}</p>
            </div>
          )}
          {(skills.length > 0 && (
            <div className="skills-box">
              <h2>Habilidades</h2>
              {skills.map((skill) => {
                return (
                  <SkillTag
                    description={skill?.description}
                    tooltipId={String(skill?.id)}
                    key={skill?.id}
                    color={skill?.color}
                  >
                    {skill?.name}
                  </SkillTag>
                );
              })}
            </div>
          )) ||
            null}
        </S.Container>
      </Dialog>
    );
  }
);

export default HeroDialog;
