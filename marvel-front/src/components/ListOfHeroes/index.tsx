import { useContext, useState } from "react";
import { HeroSelectedContext } from "../../contexts/HeroSelectedContext";
import { PageSection } from "../../styles/global";
import * as S from "./styles";
import { IChampion } from "../../utils/@types";
import { Button } from "..";
import EmptyHero from "../../assets/images/emptyhero.png";

export const ListOfHeroes = () => {
  const { heroes, setSelectedHero } = useContext(HeroSelectedContext);
  const [visibleHeroes, setVisibleHeroes] = useState(6);

  const handleImageClick = (hero: IChampion) => {
    setSelectedHero(hero);
  };

  const handleShowMore = () => {
    setVisibleHeroes((prevVisibleHeroes) => prevVisibleHeroes + 6);
  };

  return (
    <PageSection id="heroes">
      <S.Container>
        <h1>Lista de heróis</h1>
        {heroes.length > 0 ? (
          <>
            <div className="box-heroes-img">
              {heroes.slice(0, visibleHeroes).map((hero) => (
                <div key={hero.id} onClick={() => handleImageClick(hero)}>
                  <img src={hero.image} alt={hero.name} />
                </div>
              ))}
            </div>
            {visibleHeroes < heroes.length && (
              <Button handleClick={handleShowMore}>Mostrar mais</Button>
            )}
          </>
        ) : (
          <>
            <img className='empty-image' src={EmptyHero} alt="" />
            <strong className="empty-text">Não há nenhum heroi cadastrado!</strong>
          </>
        )}
      </S.Container>
    </PageSection>
  );
};
