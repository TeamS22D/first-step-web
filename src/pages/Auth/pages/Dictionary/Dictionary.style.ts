import styled from "styled-components";
import * as Text from "@/components/Text/Text.style"

export const Container = styled.div`
    width: 100%;
    min-height: 100%;
    display: flex;
    justify-content: center;
    gap: 24px;
    flex-wrap: nowrap;
    padding-top: 76px;
`

export const DictionaryContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 1000px;
    padding: 0px 12px;

    @media (max-width: 1300px) {
        width: 90%;
    }
`

export const RelatedKeywordsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    padding: 12px 16px;
    border-top: 1px solid #F2F2F2;
`

export const RelatedKeyword = styled(Text.Label)`
    color: #2EA91D;
`

export const RelatedKeywords = styled.div`
    display: flex;
    gap: 24px;
`

export const WordContainer = styled.div`
    width: 100%;
    padding: 24px 24px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-bottom: 1px solid #F2F2F2;
`

export const ResultTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`

export const WordDescContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const Word = styled(Text.Body2)`
    width: fit-content;
    background-color: #E1FFE1;
    color: #0ACF83;
`

export const WordDesc = styled(Text.Caption)`
    color: #777777;
`

export const ExampleContainer = styled.div`
    width: 100%;
    height: auto;
    background-color: #F7F7F7;
    padding: 12px 20px;
    border-radius: 5px;
`

export const Sidebar = styled.div`
    position: sticky;
    top: 150px;
    display: flex;
    height: 730px;
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: 60px;

    @media (max-width: 1300px) {
        display: none;
    }
`

export const QuizContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 48px;
    background-color: #FBFBFB;
    border-radius: 10px;
`

export const IndicatorContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Indicator = styled.div<{active?: boolean}>`
    width: 100%;
    height: 5px;
    border-radius: 2.5px;
    margin: 0px 2px;
    background-color: ${(props) => props.active? '#3FB98A' : '#ADADAD'};
`

export const Quiz = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
`

export const QuestionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
`

export const BoldQuestion = styled(Text.Body1)`
    font-weight: 600;
`

export const AnswerContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`

export const Answer = styled.button`
    width: 100%;
    padding: 12px 0px;
    border: 0;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0px 1.5px 2px 0px rgba(0, 0, 0, 0.07);
`

export const SubmitButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 12px 0px;
    background-color: #3FB98A;
    color: #fff;
    border: 0;
    border-radius: 10px;
`


export const FavoriteWordContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 16px;
    border: 1px solid #F2F2F2;
    border-radius: 10px;
    max-height: 235px;
`

export const FavoriteWords = styled.div`
    width: 100%;
    overflow-y: scroll;
`

export const Tabs = styled.div`
    display: flex;
    gap: 20px;
`

export const TabIndicator = styled(Indicator)`
    background-color: ${(props) => props.active ? '#3FB98A' : '#00000000'};
`

export const Tab = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    div {
        width: 80%;
    }
`

export const WordInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const FavoriteWord = styled.div`
    display: flex;
    padding: 12px 8px;
    justify-content: space-between;
`