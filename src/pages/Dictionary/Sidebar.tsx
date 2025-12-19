import * as Text from "@/components/Text/Text.style"
import * as S from "./styles/Sidebar.style"
import Star from "@assets/Dictionary/Star.svg?react"
import { useEffect, useState } from "react"
import Words from "./TestJSON/favoriteWord.json"
import WrongWords from "./TestJSON/wrongWord.json"
import * as I from "./types/Sidebar.type"
import axiosInstance from "@/hooks/axiosInstance"

export interface IOption {
    wordId: number;
    description: string;
}

export interface IQuiz {
    quiz: {
        id: number;
        word: string;
    };
    options: IOption[];
}

// const Quiz = () => {
//     const [tab, setTab] = useState(0);
//     const [question, setQuestion] = useState<I.IQuiz[]>([]);
//     const qaCount = question.length;
//     const [selected, setSelected] = useState<string|null>(null);

//     useEffect(() => {
//         setQuestion(questions);
//     }, [])
    
//     const handleAnswer = (ans: string) => {
//         if (selected) {return null}
//         setSelected(ans);
//         const correct = question[tab].correct
//         if (ans !== correct) {
//             //TODO: 오답단어 추가 API
//             console.log(correct);
//         }
//     }
    
//     const handleNext = () => {
//         setTab((prev) => (prev + 1) % qaCount);
//         setSelected(null);
//     }

//     const renderIndicator = () => {
//         const result = [];
//         for (let i = 0; i < qaCount; i++) {
//             result.push(<S.Indicator key={i} $active={tab===i? true : false}/>)
//         }
//         return result;
//     }

//     if (question.length === 0) {
//         return (<div>Loading...</div>)
//     }

//     return (
//         <S.QuizContainer>
//             <S.IndicatorContainer>
//                 {renderIndicator()}
//             </S.IndicatorContainer>
//             <S.Quiz>
//                 <S.QuestionContainer>
//                     <S.TextContainer>
//                         <Text.Label>Q.{question[tab].question}</Text.Label>
//                         <S.BoldQuestion>{question[tab].view}</S.BoldQuestion>
//                     </S.TextContainer>
//                     <S.AnswerContainer>
//                         {question[tab].answer.map((elem) => {
//                             const isCorrect = (elem === question[tab].correct) && selected === elem ? "correct" : selected === elem ? "wrong" : null;
//                             return (
//                                 <S.Answer onClick={() => handleAnswer(elem)} $isCorrect={isCorrect}><Text.Caption>{elem}</Text.Caption></S.Answer>
//                             )
//                         })}
//                     </S.AnswerContainer>
//                 </S.QuestionContainer>
//                 <S.SubmitButton onClick={handleNext}><Text.Caption>다음</Text.Caption></S.SubmitButton>
//             </S.Quiz>
//         </S.QuizContainer>
//     )
// }

const Quiz = () => {
    // 단일 Object 형태로 상태 관리
    const [quizData, setQuizData] = useState<I.IQuiz | null>(null);
    const [selectedId, setSelectedId] = useState<number | null>(null);

    const fetchQuiz = () => {
        axiosInstance.get('/bizwords/quiz')
            .then((response) => {
                setQuizData(response.data);
                setSelectedId(null); // 새 문제를 가져올 때 선택 상태 초기화
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        fetchQuiz();
    }, []);

    const handleAnswer = (wordId: number) => {
        if (selectedId !== null || !quizData) return;

        setSelectedId(wordId);
        
        // 정답 체크: quiz.id와 클릭한 option의 wordId 비교
        const isCorrect = wordId === quizData.quiz.id;
        
        if (!isCorrect) {
            // TODO: 오답단어 추가 API 호출 (quizData.quiz.id 전송 등)
            console.log("Wrong! The correct ID was:", quizData.quiz.id);
        }
    };

    const handleNext = () => {
        fetchQuiz(); // 다음 버튼 클릭 시 새로운 문제를 다시 서버에서 받아옴
    };

    if (!quizData) {
        return <div>Loading...</div>;
    }

    return (
        <S.QuizContainer>
            {/* 단일 문제이므로 인디케이터는 하나만 활성화하거나 제거 가능 */}
            <S.IndicatorContainer>
                <S.Indicator $active={true} />
            </S.IndicatorContainer>

            <S.Quiz>
                <S.QuestionContainer>
                    <S.TextContainer>
                        <Text.Label>Q. 아래 의미에 맞는 단어는?</Text.Label>
                        {/* 서버 데이터의 quiz.word를 질문으로 표시 */}
                        <S.BoldQuestion>{quizData.quiz.word}</S.BoldQuestion>
                    </S.TextContainer>

                    <S.AnswerContainer>
                        {quizData.options.map((option) => {
                            // 정답 여부 판단 로직
                            // 1. 내가 선택한 ID가 이 옵션의 ID인가?
                            // 2. 이 옵션의 ID가 실제 정답(quiz.id)인가?
                            const isSelected = selectedId === option.wordId;
                            const isCorrectAnswer = option.wordId === quizData.quiz.id;
                            
                            let status: "correct" | "wrong" | null = null;
                            if (isSelected) {
                                status = isCorrectAnswer ? "correct" : "wrong";
                            } else if (selectedId !== null && isCorrectAnswer) {
                                // 오답을 골랐을 때 정답이 무엇이었는지 보여주고 싶다면 추가
                                status = "correct";
                            }

                            return (
                                <S.Answer 
                                    key={option.wordId} 
                                    onClick={() => handleAnswer(option.wordId)} 
                                    $isCorrect={status}
                                >
                                    <Text.Caption>{option.description}</Text.Caption>
                                </S.Answer>
                            );
                        })}
                    </S.AnswerContainer>
                </S.QuestionContainer>
                
                <S.SubmitButton onClick={handleNext}>
                    <Text.Caption>다음 문제</Text.Caption>
                </S.SubmitButton>
            </S.Quiz>
        </S.QuizContainer>
    );
};

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