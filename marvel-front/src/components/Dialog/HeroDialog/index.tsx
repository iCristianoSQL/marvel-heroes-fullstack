import { forwardRef } from "react";
import Dialog from "..";
import * as S from "./styles";
import { IHeroDialog } from "./types";

const HeroDialog = forwardRef<HTMLDialogElement, IHeroDialog>(({ hero }, ref) => {
  return (
    <Dialog ref={ref}>
        <S.Container>
            <div className='image-relative-box'>
                <S.Image hero={hero}/>
                <span>
                    <h1>{hero.name}</h1>
                </span>
            </div>
            <div className='description-box'>
                <strong>Descrição</strong>
                <p>{hero.description}</p>
            </div>
        </S.Container>
    </Dialog>
  );
});

export default HeroDialog;
