import * as S from "./styles"
import { PageSection } from "../../styles/global"
import { Button } from ".."

export const MarvelCrud = () => {
    return (
        <PageSection>
            <S.Container>
                <nav>
                    <Button handleClick={() => console.log('oie')}>Campeão</Button>
                    <Button handleClick={() => console.log('oie')}>Habilidade</Button>
                    <Button handleClick={() => console.log('oie')}>Equipe</Button>
                </nav>
            </S.Container>
        </PageSection>
    )
}