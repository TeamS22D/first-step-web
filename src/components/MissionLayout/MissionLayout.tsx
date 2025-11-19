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
        </ThemeProvider>
    )
}

export default MissionLayout;