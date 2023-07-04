import React, { useContext, useState } from "react";
import { HeroSelectedContext } from "../../contexts/HeroSelectedContext";
import { PageSection } from "../../styles/global";
import * as S from "./styles";
import { IChampion } from "../../utils/@types";
import { Button, TextInput } from "..";
import EmptyHero from "../../assets/images/emptyhero.png";

export const ListOfHeroes = () => {
  const { heroes, setSelectedHero } = useContext(HeroSelectedContext);
  const [visibleHeroes, setVisibleHeroes] = useState(6);
  const [searchValue, setSearchValue] = useState("");

  const handleImageClick = (hero: IChampion) => {
    setSelectedHero(hero);
  };

  const handleShowMore = () => {
    setVisibleHeroes((prevVisibleHeroes) => prevVisibleHeroes + 6);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const filteredHeroes = heroes.filter((hero) =>
    hero.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <PageSection id="heroes">
      <S.Container>
        <h1>Lista de heróis</h1>
        <TextInput
          type="text"
          placeholder="Buscar herói"
          value={searchValue}
          handleChange={handleSearchChange}
          className="search-hero-input"
        />
        {filteredHeroes.length > 0 ? (
          <>
            <div className="box-heroes-img">
              {filteredHeroes.slice(0, visibleHeroes).map((hero) => (
                <div key={hero.id} onClick={() => handleImageClick(hero)}>
                  <img src={hero.image} alt={hero.name} />
                </div>
              ))}
            </div>
            {visibleHeroes < filteredHeroes.length && (
              <Button handleClick={handleShowMore}>Mostrar mais</Button>
            )}
          </>
        ) : (
          <>
            <img className="empty-image" src={EmptyHero} alt="" />
            <strong className="empty-text">Não há nenhum heroi cadastrado!</strong>
          </>
        )}
      </S.Container>
    </PageSection>
  );
};
