import { GlobalStyle } from "../../styles/GlobalStyle";
import * as S from "./NotFound.style";
import Character from "/assets/NotFound/Character.png"

function NotFound() {
    return (
        <>
            <GlobalStyle/>
            <S.Container>
                <S.Img src={Character} alt="캐릭터 이미지" />
                <S.Display>Oops! 404 Error</S.Display>
                <S.BodyText>Page Not Found</S.BodyText>
            </S.Container>
        </>
    )
}

export default NotFound;