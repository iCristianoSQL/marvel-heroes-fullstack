import * as S from "./styles";
import Logo from "../../assets/images/logo.png";

export const NavigationBar = () => {
  return (
    <S.Header>
      <img src={Logo} alt="Logo" />

      <S.Nav>
        <a href="#">Início</a>
        <a href="#infos">Informação</a>
        <a href="#heroes">Heróis</a>
        <a href="https://www.google.com.br" target="_blank" rel='noopener'>Painel</a>
      </S.Nav>
    </S.Header>
  );
};