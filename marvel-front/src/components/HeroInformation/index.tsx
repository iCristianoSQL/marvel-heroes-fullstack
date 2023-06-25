import React, { useContext } from "react";
import { HeroSelectedContext } from "../../contexts/HeroSelectedContext";
import { PageSection } from "../../styles/global";
import * as S from "./styles";
import { Button } from "../index";
import { truncateText } from "../../utils/truncatedText";

export const HeroInformation = () => {
  const { hero } = useContext(HeroSelectedContext);

  return (
    <PageSection>
      <S.Container>
        <img src={hero.image} alt={hero.name} />
        <div className="box-hero-info">
          <h1>{hero.name}</h1>
          <p>{truncateText(hero.description, 255)}</p>
          <Button
            handleClick={() => console.log("oiee")}
            className="view-more-button"
          >
            Detalhes
          </Button>
        </div>
      </S.Container>
    </PageSection>
  );
};
