import { useContext, useRef } from "react";
import { HeroSelectedContext } from "../../contexts/HeroSelectedContext";
import { PageSection } from "../../styles/global";
import * as S from "./styles";
import { Button } from "../index";
import { truncateText } from "../../utils/truncatedText";
import HeroDialog from "../Dialog/HeroDialog";

export const HeroInformation = () => {
  const { hero } = useContext(HeroSelectedContext);
  const heroDialog = useRef<HTMLDialogElement>(null);

  const openHeroDialog = () => {
    if (heroDialog.current) {
      heroDialog.current.showModal();
    }
  };

  return (
    <PageSection id="infos">
      <S.Container>
        <img src={hero.image} alt={hero.name} />
        <div className="box-hero-info">
          <h1>{hero.name}</h1>
          <p>{truncateText(hero.description, 255)}</p>
          <Button handleClick={openHeroDialog} className="view-more-button">
            Detalhes
          </Button>
        </div>
      </S.Container>
      <HeroDialog ref={heroDialog} hero={hero}/>
    </PageSection>
  );
};
