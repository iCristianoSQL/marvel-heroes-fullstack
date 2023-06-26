import * as S from "./styles";
import { forwardRef } from "react";
import { IDialog } from "./types";
import { AiOutlineClose } from "react-icons/ai";

const Dialog: React.ForwardRefRenderFunction<HTMLDialogElement, IDialog> = (
  { width, height, children, ...rest },
  ref
) => {
  const closeDialog = () => {
    if (typeof ref === "function") {
      return;
    }

    if (ref && ref.current) {
      ref.current.close();
    }
  };

  return (
    <S.DialogContainer ref={ref} width={width} height={height} {...rest}>
      <div className="box-close-modal">
        <button onClick={closeDialog}>
          <AiOutlineClose />
        </button>
      </div>
      {children}
    </S.DialogContainer>
  );
};

export default forwardRef(Dialog);
