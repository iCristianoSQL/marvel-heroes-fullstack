import * as S from './styles';
import Logo from '../../assets/images/logo.png';

export const NavigationBar = () => {
    return (
        <S.Header>
            <img src={Logo} alt="Logo" />
        </S.Header>
    )
}