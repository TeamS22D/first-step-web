import { Outlet } from "react-router";
import {GlobalStyle} from "../../styles/GlobalStyle.ts";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../../theme/theme.ts";
import * as S from './MissionLayout.style.ts';
import StepComponent from '../Step/StepsComponent.tsx';
import GuideBox from "@/pages/Mission/components/GuideBox.tsx";
// import { useNavigate } from "react-router-dom";
import Buttons from "./SubmitButton/SubmitButton.tsx";
import { createContext, useState } from "react";

export type ButtonAction = () => void | Promise<void>;

export interface MissionFeedbackContextType {
  buttonAction: ButtonAction;
  setButtonAction: React.Dispatch<React.SetStateAction<ButtonAction>>;
}

export const MissionFeedbackContext = createContext<MissionFeedbackContextType | null>(null);

export default function MissionLayout() {
    const [buttonAction, setButtonAction] = useState<ButtonAction>(() => () => {});
    return (
        <MissionFeedbackContext.Provider value={{ buttonAction, setButtonAction }}>
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
        </MissionFeedbackContext.Provider>
    )
}


