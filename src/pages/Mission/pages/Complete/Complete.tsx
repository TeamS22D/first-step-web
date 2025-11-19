import { GlobalStyle } from "../../../../styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../../../../theme/theme";
import {Step} from '../../../../components/Step/StepsComponent';
import * as S from './Complete';
import React from "react";

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

function Complete() {
    return (
        <ThemeProvider theme={lightTheme}>
            <GlobalStyle/>
            <S.Container>
                <S.TopContainer>
                    <Step/>
                </S.TopContainer>
                <S.Body>
                    <S.container>
                        <S.Speech>{firm}</S.Speech>
                        <Image src='/assets/Mission/firm.png' alt=''/>
                    </S.container>
                    <S.buttoncontainer>
                        <S.Button1>
                            로그인하기
                        </S.Button1>
                        <S.Button2>
                            홈으로 돌아가기
                        </S.Button2>
                    </S.buttoncontainer>
                </S.Body>
            </S.Container>
        </ThemeProvider>
    )

}

export default Complete;