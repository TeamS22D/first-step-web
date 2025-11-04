import * as Text from "@/components/Text/Text.style"
import * as S from "./Dictionary.style"
import Star from "@assets/Dictionary/Star.svg?react"

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
    return (
        <S.FavoriteWordContainer>
            <S.Tabs>
                <S.Tab onClick={() => console.log("즐겨찾기")}><Text.Caption>즐겨찾기</Text.Caption><S.TabIndicator active/></S.Tab>
                <S.Tab onClick={() => console.log("오답")}><Text.Caption>오답</Text.Caption><S.TabIndicator/></S.Tab>
            </S.Tabs>
            
            <S.FavoriteWords>
                <S.FavoriteWord>
                    <Text.Label>CDC솔루션</Text.Label>
                    <Star />
                </S.FavoriteWord>
                <S.FavoriteWord>
                    <Text.Label>CDC솔루션</Text.Label>
                    <Star />
                </S.FavoriteWord>
                <S.FavoriteWord>
                    <Text.Label>CDC솔루션</Text.Label>
                    <Star />
                </S.FavoriteWord>
                <S.FavoriteWord>
                    <Text.Label>CDC솔루션</Text.Label>
                    <Star />
                </S.FavoriteWord>
                <S.FavoriteWord>
                    <Text.Label>CDC솔루션</Text.Label>
                    <Star />
                </S.FavoriteWord>
                <S.FavoriteWord>
                    <Text.Label>CDC솔루션</Text.Label>
                    <Star />
                </S.FavoriteWord>
                <S.FavoriteWord>
                    <Text.Label>CDC솔루션</Text.Label>
                    <Star />
                </S.FavoriteWord>
                <S.FavoriteWord>
                    <Text.Label>CDC솔루션</Text.Label>
                    <Star />
                </S.FavoriteWord>
                <S.FavoriteWord>
                    <Text.Label>CDC솔루션</Text.Label>
                    <Star />
                </S.FavoriteWord>
                <S.FavoriteWord>
                    <Text.Label>CDC솔루션</Text.Label>
                    <Star />
                </S.FavoriteWord>
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