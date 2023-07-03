import React, { useState } from "react";
import * as S from "./styles";
import { PageSection } from "../../styles/global";
import { Button } from "..";
import { ChampionScreen } from "./ChampionScreen";
import { TeamScreen } from "./TeamScreen";
import { SkillScreen } from "./SkillScreen";

interface ScreenComponents {
  [key: string]: React.ReactNode;
}

export const MarvelCrud = () => {
  const [activeScreen, setActiveScreen] = useState("Champion");

  const renderScreen = (screenName: string) => {
    setActiveScreen(screenName);
  };

  const screenComponents: ScreenComponents = {
    Champion: <ChampionScreen />,
    Skill: <SkillScreen />,
    Team: <TeamScreen />,
  };

  return (
    <PageSection>
      <S.Container>
        <nav>
          <Button handleClick={() => renderScreen("Champion")}>Campeão</Button>
          {/* <Button handleClick={() => renderScreen("Skill")}>Habilidade</Button>
          <Button handleClick={() => renderScreen("Team")}>Equipe</Button> */}
        </nav>
        {screenComponents[activeScreen]}
      </S.Container>
    </PageSection>
  );
};
