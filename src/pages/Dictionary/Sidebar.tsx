import * as Text from "@/components/Text/Text.style"
import * as S from "./styles/Sidebar.style"
import Star from "@assets/Dictionary/Star.svg?react"
import { useEffect, useState } from "react"
import Words from "./TestJSON/favoriteWord.json"
import WrongWords from "./TestJSON/wrongWord.json"
import questions from "./TestJSON/quiz.json"
import * as I from "./types/Sidebar.type"

const Quiz = () => {
    const [tab, setTab] = useState(0);
    const [question, setQuestion] = useState<I.IQuiz[]>([]);
    const qaCount = question.length;
    const [selected, setSelected] = useState<string|null>(null);

    useEffect(() => {
        setQuestion(questions);
    }, [])
    
    const handleAnswer = (ans: string) => {
        if (selected) {return null}
        setSelected(ans);
        const correct = question[tab].correct
        if (ans !== correct) {
            //TODO: 오답단어 추가 API
            console.log(correct);
        }
    }
    
    const handleNext = () => {
        setTab((prev) => (prev + 1) % qaCount);
        setSelected(null);
    }

    const renderIndicator = () => {
        const result = [];
        for (let i = 0; i < qaCount; i++) {
            result.push(<S.Indicator key={i} $active={tab===i? true : false}/>)
        }
        return result;
    }

    if (question.length === 0) {
        return (<div>Loading...</div>)
    }

    return (
        <S.QuizContainer>
            <S.IndicatorContainer>
                {renderIndicator()}
            </S.IndicatorContainer>
            <S.Quiz>
                <S.QuestionContainer>
                    <S.TextContainer>
                        <Text.Label>Q.{question[tab].question}</Text.Label>
                        <S.BoldQuestion>{question[tab].view}</S.BoldQuestion>
                    </S.TextContainer>
                    <S.AnswerContainer>
                        {question[tab].answer.map((elem) => {
                            const isCorrect = (elem === question[tab].correct) && selected === elem ? "correct" : selected === elem ? "wrong" : null;
                            return (
                                <S.Answer onClick={() => handleAnswer(elem)} $isCorrect={isCorrect}><Text.Caption>{elem}</Text.Caption></S.Answer>
                            )
                        })}
                    </S.AnswerContainer>
                </S.QuestionContainer>
                <S.SubmitButton onClick={handleNext}><Text.Caption>다음</Text.Caption></S.SubmitButton>
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
                <S.Tab onClick={() => setTab(0)}><Text.Caption>즐겨찾기</Text.Caption><S.TabIndicator $active={tab===0? true : false}/></S.Tab>
                <S.Tab onClick={() => setTab(1)}><Text.Caption>오답</Text.Caption><S.TabIndicator $active={tab===1? true : false}/></S.Tab>
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