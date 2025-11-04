import * as Text from "@/components/Text/Text.style"
import * as S from "./Dictionary.style"
import Star from "@assets/Dictionary/Star.svg?react"
import { useEffect, useState } from "react"
import Words from "./favoriteWord.json"
import WrongWords from "./wrongWord.json"

const Quiz = () => {
    return (
        <S.QuizContainer>
            <S.IndicatorContainer>
                <S.Indicator active/>
                <S.Indicator />
                <S.Indicator />
            </S.IndicatorContainer>
            <S.Quiz>
                <S.QuestionContainer>
                    <S.TextContainer>
                        <Text.Label>Q.아래 뜻의 단어는?</Text.Label>
                        <S.BoldQuestion>뛰어나다, 탁월하다</S.BoldQuestion>
                    </S.TextContainer>
                    <S.AnswerContainer>
                        <S.Answer><Text.Caption>abc</Text.Caption></S.Answer>
                        <S.Answer><Text.Caption>abc</Text.Caption></S.Answer>
                        <S.Answer><Text.Caption>abc</Text.Caption></S.Answer>
                        <S.Answer><Text.Caption>abc</Text.Caption></S.Answer>
                    </S.AnswerContainer>
                </S.QuestionContainer>
                <S.SubmitButton><Text.Caption>다음</Text.Caption></S.SubmitButton>
            </S.Quiz>
        </S.QuizContainer>
    )
}

const FavoriteWord = () => {
    const [tab, setTab] = useState(0)
    const [words, setWords] = useState<string[]>([])

    useEffect(() => {
        //TODO: API 호출
        if(tab===0) {setWords(Words)}
        else {setWords(WrongWords)}
    }, [tab])

    return (
        <S.FavoriteWordContainer>
            <S.Tabs>
                <S.Tab onClick={() => setTab(0)}><Text.Caption>즐겨찾기</Text.Caption><S.TabIndicator active={tab===0? true : false}/></S.Tab>
                <S.Tab onClick={() => setTab(1)}><Text.Caption>오답</Text.Caption><S.TabIndicator active={tab===1? true : false}/></S.Tab>
            </S.Tabs>
            
            <S.FavoriteWords>
                {words.map((elem) => {return (
                    <S.FavoriteWord>
                        <Text.Label>{elem}</Text.Label>
                        <Star />
                    </S.FavoriteWord>
                )})}
            </S.FavoriteWords>
        </S.FavoriteWordContainer>
    )
}

const Sidebar = () => {
    return (
        <S.Sidebar>
            <Quiz/>
            <FavoriteWord />
        </S.Sidebar>
    )
}

export default Sidebar;