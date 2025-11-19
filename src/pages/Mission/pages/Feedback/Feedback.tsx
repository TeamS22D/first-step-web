import { GlobalStyle } from "../../../../styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../../../../theme/theme";
import * as S from './Feedback';
import Graph from "../../components/Graph";

const target:string = "다른 회사로부터 외주 개발 프로젝트를 더 예의있게 보내는 실습"
const date:string = "2024-11-04"
const I:string = '|'

const Text:string = '양식 확인 부분과 구조 명확성 부분이 100점으로 만점을 받았습니다. \n하지만 내용 충족이나 단어, 언어 표현 부분에서 비교적 낮은 점수를 받았습니다.\n\n지난 미션보다 2% 상승하였습니다. 부족한 부분의 역량을 조금 더 키워나가면 더 좋은 직원이 되실 수 있으실 것입니다~! 만점을 받기 위하여 아자아자!!'

export function TitleBox() {
    return(
        <S.TitleBox>
            <S.TitleTopContainer>
                <span className="TitleText">[보고서] 업무 보고서 작성</span>  
                <div className="period">
                    9일 전
                </div>
            </S.TitleTopContainer>
            <S.TitleBottomContainer>
                <span className="date">{date}</span>
                <span>{I}</span>
                <span>{target}</span>
            </S.TitleBottomContainer>
        </S.TitleBox>
    )
}


export function MiddleBox() {
    return(
        <S.MiddleContainer>
            <S.MiddleGraph>
                <Graph/>
            </S.MiddleGraph>
            <S.MiddleEvaluation>
                <S.MiddleRatingContainer/>
                <S.MiddleRatingTextarea>
                    {Text}
                </S.MiddleRatingTextarea>
            </S.MiddleEvaluation>
        </S.MiddleContainer>
    )
}

export function BottomHelf() {
    return (
        <S.BottomHelf>
            <div className="TitleContainer">
                <div className="Title">
                    잘한 점
                </div>
            </div>
            <div className="Textarea">
                주어진 문제 상황의 내용을 올바르게 해결하였는지, 주어진 내용이 모두 있는지를 잘 검사하였습니다!
            </div>
        </S.BottomHelf>
    )
}


export function BottomBox(){
    return(
        <S.BottomContainer>
            <S.BottomLeftContainer>
                <BottomHelf/>
                <BottomHelf/>
            </S.BottomLeftContainer>
            <S.BottomRightArea>
                <S.BottomRightAreaContainer>
                    <S.BottomRightAreaItem>
                        <S.Bar />
                        <S.ItemContent>
                            <S.Title>맞춤법</S.Title>
                            <S.Sub>
                                위 상황에서는 어떡게가 아닌 어떻게의 표현이 더 적절한 표현입니다!
                                어떡게라는 표현은 존재하지 않습니다
                            </S.Sub>
                        </S.ItemContent>
                    </S.BottomRightAreaItem>
                    <S.BottomRightAreaItem>
                        <S.Bar />
                        <S.ItemContent>
                            <S.Title>단어</S.Title>
                            <S.Sub>
                            좀 더 예의와 격식을 차리고 싶으시면 ‘진지’라는 단어도 추천드려요~!! 
                            </S.Sub>
                        </S.ItemContent>
                    </S.BottomRightAreaItem>

                    <S.BottomRightAreaItem>
                        <S.Bar />
                        <S.ItemContent>
                            <S.Title>구조 명확성</S.Title>
                            <S.Sub>
                            문서의 구조와 흐름이 명확하지 않아요.. 상대방이 좀 더 잘 알 수 있게 적어보아요!
                            </S.Sub>
                        </S.ItemContent>
                    </S.BottomRightAreaItem>
                </S.BottomRightAreaContainer>
            </S.BottomRightArea>
        </S.BottomContainer>
    )
}

function Feedback() {
    return (
        <ThemeProvider theme={lightTheme}>
            <GlobalStyle/>
            <S.Body>
                <TitleBox/>
                <MiddleBox/>
                <BottomBox/>
                <S.buttoncontainer>
                    <S.backButton>
                        돌아가기
                    </S.backButton>
                </S.buttoncontainer>
            </S.Body>
        </ThemeProvider>
    )
}

export default Feedback;