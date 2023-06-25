import * as S from "./styles";
import Logo from "../../assets/images/logo.png";

export const NavigationBar = () => {
  return (
    <S.Header>
      <img src={Logo} alt="Logo" />

      <S.Nav>
        <a href="#">Início</a>
        <a href="#">Informação</a>
        <a href="#">Heróis</a>
        <a href="#">Painel</a>
      </S.Nav>
    </S.Header>
  );
};