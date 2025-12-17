import * as S from './SubmitButton.style'
import { useContext } from "react";
import { MissionFeedbackContext } from "../MissionLayout";

export default function Buttons() {
    const ctx = useContext(MissionFeedbackContext);
    const save = useContext(MissionFeedbackContext);

    if (!ctx) throw new Error("FeedbackActionButton must be used inside MissionFeedbackLayout");
    if (!save) throw new Error("FeedbackActionButton must be used inside MissionFeedbackLayout");
    
    return(
        <>
            <S.button  onClick={save.buttonAction}>
                저장하기
            </S.button>
            <S.button color primary border onClick={ctx.buttonAction}>
                제출하기
            </S.button>
        </>
    )
}

