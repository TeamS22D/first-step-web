import * as S from './SubmitButton.style'
import { useContext } from "react";
import { MissionFeedbackContext } from "../MissionLayout";

export default function Buttons() {
    //const navigate = useNavigate();
    const ctx = useContext(MissionFeedbackContext);

    if (!ctx) throw new Error("FeedbackActionButton must be used inside MissionFeedbackLayout");

    return(
        <>
            <S.button>
                저장하기
            </S.button>
            <S.button color primary border 
             onClick={ctx.buttonAction}
            //onClick={() => navigate("/missionfeedback")}
            >
                제출하기
            </S.button>
        </>
    )
}

