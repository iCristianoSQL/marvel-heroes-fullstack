import * as S from "./styles";
import { IButton } from "./types";

export const Button = ({ children, className, handleClick, ...rest }: IButton) => {
  return (
    <S.PageButton className={className} onClick={handleClick} {...rest}>
      {children}
    </S.PageButton>
  );
};
