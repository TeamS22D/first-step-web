import * as Text from "@/components/Text/Text.style";
import * as S from "./styles/Sidebar.style";
import Star from "@assets/Dictionary/Star.svg?react";
import { useEffect, useState, useCallback } from "react";
import axiosInstance from "@/hooks/axiosInstance";

// ----------------------------------------------------------------------
// 1. 타입 정의
// ----------------------------------------------------------------------

export interface IOption {
    wordId: number;
    description: string;
}

export interface IQuizData {
    quiz: {
        id: number;
        word: string;
    };
    options: IOption[];
}

export interface IWordItem {
    wordId: number;
    word: string;
    mean?: string;
    isFavorite?: boolean;
}

// ----------------------------------------------------------------------
// 2. 퀴즈 컴포넌트
// ----------------------------------------------------------------------

const Quiz = () => {
    const [quizData, setQuizData] = useState<IQuizData | null>(null);
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const [loading, setLoading] = useState(false);

    // 퀴즈 데이터 가져오기
    const fetchQuiz = useCallback(async () => {
        try {
            setLoading(true);
            const res = await axiosInstance.get('/bizwords/quiz');
            setQuizData(res.data);
            setSelectedId(null); 
        } catch (error) {
            console.error("퀴즈 로딩 실패:", error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchQuiz();
    }, [fetchQuiz]);

    // 정답 처리
    const handleAnswer = async (wordId: number) => {
        if (selectedId !== null || !quizData) return;

        setSelectedId(wordId);
        
        const isCorrect = wordId === quizData.quiz.id;
        
        // 틀렸을 경우 오답 노트에 추가
        if (!isCorrect) {
            try {
                // 오답 단어 저장 API 호출 (예시 엔드포인트)
                await axiosInstance.post(`/bizwords/wrong/${quizData.quiz.id}`);
                console.log("오답 노트 저장 완료");
            } catch (err) {
                console.error("오답 저장 실패:", err);
            }
        }
    };

    if (loading && !quizData) return <div>Loading...</div>;
    if (!quizData) return null;

    return (
        <S.QuizContainer>
            <S.IndicatorContainer>
                <S.Indicator $active={true} />
            </S.IndicatorContainer>

            <S.Quiz>
                <S.QuestionContainer>
                    <S.TextContainer>
                        <Text.Label>Q. 다음 단어의 뜻은?</Text.Label>
                        <S.BoldQuestion>{quizData.quiz.word}</S.BoldQuestion>
                    </S.TextContainer>

                    <S.AnswerContainer>
                        {quizData.options.map((option) => {
                            // 정답 판별 로직
                            const isSelected = selectedId === option.wordId;
                            const isCorrectAnswer = option.wordId === quizData.quiz.id;
                            
                            let status: "correct" | "wrong" | null = null;

                            if (selectedId !== null) {
                                if (isSelected) {
                                    status = isCorrectAnswer ? "correct" : "wrong";
                                } else if (isCorrectAnswer) {
                                    // 내가 선택하진 않았지만, 이것이 정답일 때 표시
                                    status = "correct";
                                }
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
                
                <S.SubmitButton onClick={fetchQuiz}>
                    <Text.Caption>다음 문제</Text.Caption>
                </S.SubmitButton>
            </S.Quiz>
        </S.QuizContainer>
    );
};

// ----------------------------------------------------------------------
// 3. 즐겨찾기 / 오답노트 컴포넌트
// ----------------------------------------------------------------------

const FavoriteWord = () => {
    const [tab, setTab] = useState(0); // 0: 즐겨찾기, 1: 오답노트
    const [words, setWords] = useState<IWordItem[]>([]);

    useEffect(() => {
        const fetchWords = async () => {
            try {
                // 탭에 따라 다른 API 호출
                const endpoint = tab === 0 ? '/bizwords/favorites' : '/bizwords/wrong';
                const res = await axiosInstance.get(endpoint);
                
                // 데이터가 배열인지 확인 후 설정
                if (Array.isArray(res.data)) {
                    setWords(res.data);
                } else {
                    setWords([]);
                }
            } catch (err) {
                console.error("단어장 로딩 실패:", err);
                setWords([]);
            }
        };

        fetchWords();
    }, [tab]);

    // 별 클릭 시 즐겨찾기 해제/등록 로직 (필요 시 구현)
    const handleToggleStar = async (wordId: number) => {
        try {
            await axiosInstance.patch(`/bizwords/favorites/${wordId}`);
            // UI에서 즉시 제거하거나 상태 업데이트
            setWords(prev => prev.filter(w => w.wordId !== wordId));
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <S.FavoriteWordContainer>
            <S.Tabs>
                <S.Tab onClick={() => setTab(0)}>
                    <Text.Caption>즐겨찾기</Text.Caption>
                    <S.TabIndicator $active={tab === 0} />
                </S.Tab>
                <S.Tab onClick={() => setTab(1)}>
                    <Text.Caption>오답</Text.Caption>
                    <S.TabIndicator $active={tab === 1} />
                </S.Tab>
            </S.Tabs>
            
            <S.FavoriteWords>
                {words.length > 0 ? (
                    words.map((elem) => (
                        <S.FavoriteWord key={elem.wordId}>
                            <Text.Label>{elem.word}</Text.Label>
                            {/* 오답노트 탭에서도 즐겨찾기 추가 기능이 필요하면 조건부 렌더링 */}
                            <div style={{ cursor: 'pointer' }} onClick={() => handleToggleStar(elem.wordId)}>
                                <Star />
                            </div>
                        </S.FavoriteWord>
                    ))
                ) : (
                    <div style={{ padding: '20px', textAlign: 'center', color: '#999', fontSize: '12px' }}>
                        단어가 없습니다.
                    </div>
                )}
            </S.FavoriteWords>
        </S.FavoriteWordContainer>
    );
}

// ----------------------------------------------------------------------
// 4. 메인 Sidebar
// ----------------------------------------------------------------------

const Sidebar = () => {
    return (
        <S.Sidebar>
            <Quiz/>
            <FavoriteWord />
        </S.Sidebar>
    )
}

export default Sidebar;