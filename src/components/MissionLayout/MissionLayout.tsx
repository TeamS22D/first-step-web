import { Outlet } from "react-router";
import {GlobalStyle} from "../../styles/GlobalStyle.ts";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../../theme/theme.ts";
import * as S from './MissionLayout.ts';
import StepComponent from '../Step/StepsComponent.tsx';
import GuideBox from "@/pages/Mission/components/GuideBox.tsx";

function MissionLayout() {
    return (
        <ThemeProvider theme={lightTheme}>
            <S.Wrapper>
                <GlobalStyle/>
                <S.Container>
                    <S.TopContainer>
                        <StepComponent/>
                    </S.TopContainer>
                    <S.Body>
                        <GuideBox/>
                        <Outlet />
                    </S.Body>
                </S.Container>
                <Buttons/>
            </S.Wrapper>
        </ThemeProvider>
    )
}

export default MissionLayout;

function Buttons() {
    return(
        <S.BottomContainer>
            <S.button>
                저장하기
            </S.button>
            <S.button color primary border>
                제출하기
            </S.button>
        </S.BottomContainer>
    )
}