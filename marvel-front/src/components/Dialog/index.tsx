import * as S from "./styles";
import { forwardRef } from "react";
import { IDialog } from "./types";
import { AiOutlineClose } from "react-icons/ai";

const Dialog: React.ForwardRefRenderFunction<
  HTMLDialogElement,
  IDialog
> = ({ handleCloseModal, width, height, children, ...rest }, ref) => {
  return (
    <S.DialogContainer ref={ref} width={width} height={height} {...rest}>
        <div className='box-close-modal'>
            <button onClick={handleCloseModal}>
                <AiOutlineClose/>
            </button>
        </div>
        {children}
    </S.DialogContainer>
  );
};

export default forwardRef(Dialog);
