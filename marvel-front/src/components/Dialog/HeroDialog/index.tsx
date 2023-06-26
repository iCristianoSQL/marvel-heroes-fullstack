import { forwardRef } from "react";
import Dialog from "..";
import * as S from "./styles";
import { IHeroDialog } from "./types";

const HeroDialog = forwardRef<HTMLDialogElement, IHeroDialog>(({ hero }, ref) => {
  return (
    <Dialog ref={ref}>
        <S.Container>
            <S.Image hero={hero}/>
            <p>asdasd</p>
        </S.Container>
    </Dialog>
  );
});

export default HeroDialog;
