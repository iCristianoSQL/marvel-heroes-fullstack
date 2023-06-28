import { useContext, useRef } from "react";
import { HeroSelectedContext } from "../../contexts/HeroSelectedContext";
import { PageSection } from "../../styles/global";
import * as S from "./styles";
import { Button } from "../index";
import { truncateText } from "../../utils/truncatedText";
import HeroDialog from "../Dialog/HeroDialog";
import { initialChampion } from "../../mocks/champion";

export const HeroInformation = () => {
  const { selectedHero } = useContext(HeroSelectedContext);
  const heroDialog = useRef<HTMLDialogElement>(null);

  const openHeroDialog = () => {
    if (heroDialog.current) {
      heroDialog.current.showModal();
    }
  };

  return (
    <PageSection id="infos">
      <S.Container>
        <img src={selectedHero?.image} alt={selectedHero?.name} />
        <div className="box-hero-info">
          <h1>{selectedHero?.name}</h1>
          <p>{truncateText(selectedHero?.description ?? '', 255)}</p>
          <Button handleClick={openHeroDialog} className="view-more-button">
            Detalhes
          </Button>
        </div>
      </S.Container>
      <HeroDialog ref={heroDialog} hero={selectedHero ?? initialChampion}/>
    </PageSection>
  );
};
