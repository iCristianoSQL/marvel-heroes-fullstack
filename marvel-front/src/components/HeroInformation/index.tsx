import { PageSection } from "../../styles/global";
import * as S from "./styles";
import BlackPanther from "../../assets/heroes/black_panther.jpg";
import { Button } from "../index";

export const HeroInformation = () => {
  return (
    <PageSection>
      <S.Container>
        <img src={BlackPanther} alt="Black Panther" />
        <div className="box-hero-info">
          <h1>Pantera Negra</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
            tempore vitae maxime magni nisi quibusdam, quod sint consectetur
            quasi. Quia vel eligendi maxime adipisci voluptate consequuntur
            sequi nulla esse velit.
          </p>
          <Button
            className="view-more-button"
            handleClick={() => console.log("oiie")}
          >
            Ver Mais
          </Button>
        </div>
      </S.Container>
    </PageSection>
  );
};
