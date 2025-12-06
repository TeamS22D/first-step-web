import { Outlet } from "react-router";
import {GlobalStyle} from "../../styles/GlobalStyle.ts";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../../theme/theme.ts";
import * as S from './MissionLayout.style.ts';
import StepComponent from '../Step/StepsComponent.tsx';
import GuideBox from "@/pages/Mission/components/GuideBox.tsx";
// import { useNavigate } from "react-router-dom";
import Buttons from "./SubmitButton/SubmitButton.tsx";

export default function MissionLayout() {
    return (
        <ThemeProvider theme={lightTheme}>
            <S.Wrapper>
                <GlobalStyle/>
                <S.Container>
                    <S.TopContainer>
                        <StepComponent step={0}/>
                    </S.TopContainer>
                    <S.Body>
                        <GuideBox/>
                        <Outlet />
                    </S.Body>
                </S.Container>
                <S.BottomContainer>
                    <Buttons/>
                </S.BottomContainer>
            </S.Wrapper>
        </ThemeProvider>
    )
}


