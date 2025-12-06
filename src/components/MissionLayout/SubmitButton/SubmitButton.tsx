import * as S from './SubmitButton.style'

export default function Buttons() {
    //const navigate = useNavigate();

    return(
        <>
            <S.button>
                저장하기
            </S.button>
            <S.button color primary border 
            //onClick={() => navigate("/missionfeedback")}
            >
                제출하기
            </S.button>
        </>
    )
}

