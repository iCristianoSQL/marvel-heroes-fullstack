import * as S from "./styles";
import Logo from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";

export const NavigationBar = () => {
  const navigate = useNavigate()
  return (
    <S.Header>
      <img src={Logo} alt="Logo" />

      <S.Nav>
        <a href="#" onClick={() => navigate('/')}>Início</a>
        <a href="#infos">Informação</a>
        <a href="#heroes">Heróis</a>
        <a onClick={() => navigate('/painel')} rel='noopener'>Painel</a>
      </S.Nav>
    </S.Header>
  );
};