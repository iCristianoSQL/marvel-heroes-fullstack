import * as S from "./styles";
import { IButton } from "./types";

export const Button = ({ children, className, handleClick }: IButton) => {
  return (
    <S.PageButton className={className} onClick={handleClick}>
      {children}
    </S.PageButton>
  );
};
