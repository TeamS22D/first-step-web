import { GlobalStyle } from "../../../../styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../../../../theme/theme";
import StepsComponent from '../../../../components/Step/StepsComponent';
import * as S from './MissionComplete.style';
import { useNavigate } from 'react-router';

interface ImageProps {
    src: string;
    alt: string;
}


const Image = ({src, alt}:ImageProps) => {
    return (
        <S.Image src={src} alt={alt} />
    )
}

const firm: string = '수고 하셨습니다!! \n다른 미션에서도 능력을 발휘해 주시길~'

export default function MissionComplete() {

    const navigate = useNavigate();

    const pageMoveHome = () => {
        navigate("/home")
    }

    const pageMoveMissionList = () => {
        navigate("/mission/all")
    }


    return (
        <ThemeProvider theme={lightTheme}>
            <GlobalStyle/>
            <S.Container>
                <S.TopContainer>
                    <StepsComponent step={2} />
                </S.TopContainer>
                <S.Body>
                    <S.container>
                        <S.Speech>{firm}</S.Speech>
                        <Image src='/assets/Mission/firm.png' alt=''/>
                    </S.container>
                    <S.buttoncontainer>
                        <S.Button1 onClick = {pageMoveMissionList}>
                            다른 미션하러 가기
                        </S.Button1>
                        <S.Button2 onClick={pageMoveHome}>
                            홈으로 돌아가기
                        </S.Button2>
                    </S.buttoncontainer>
                </S.Body>
            </S.Container>
        </ThemeProvider>
    )

}

