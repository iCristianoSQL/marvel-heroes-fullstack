import * as S from "./styles";
import Linkedin from "../../assets/images/linkedin.png";
import Gmail from "../../assets/images/gmail.png";

export const Footer = () => {
  return (
    <S.Footer>
      <a href="https://www.linkedin.com/in/cristiano-santos-11b197218/" target="_blank" rel="noopener">
        <img src={Linkedin} alt="Linkedin" />
      </a>
      <a href="mailto:cristianosql02@gmail.com">
        <img src={Gmail} alt="Gmail" />
      </a>
      <span>© Marvel Heroes</span>
    </S.Footer>
  );
};
