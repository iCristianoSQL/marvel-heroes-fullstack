import React, { useContext, useRef } from "react";
import { HeroSelectedContext } from "../../contexts/HeroSelectedContext";
import { PageSection } from "../../styles/global";
import * as S from "./styles";
import { Button } from "../index";
import { truncateText } from "../../utils/truncatedText";
import Dialog from "../Dialog"

export const HeroInformation = () => {
  const { hero } = useContext(HeroSelectedContext);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openDialog = () => {
      if (dialogRef.current) {
          dialogRef.current.showModal();
      }
  };

  const closeDialog = () => {
      if (dialogRef.current) {
          dialogRef.current.close();
      }
  };


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
      <button onClick={openDialog}>Open Dialog</button>
            <Dialog handleCloseModal={closeDialog}  ref={dialogRef} >
              <h1>Testando</h1>
            </Dialog>
    </PageSection>
  );
};
