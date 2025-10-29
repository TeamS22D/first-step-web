import * as Text from "@/components/Text/Text.style"
import * as S from "./Dictionary.style"
import Searchbar from "@/components/Searchbar/Searchbar"
import Star from "@assets/Dictionary/Star.svg?react"

interface ISearchResultProps {
    word: string;
    desc: string[];
    example: string;
}

const SearchResult = ({word, desc, example}:ISearchResultProps) => {
    return (
        <S.SearchResult>
            <S.ResultTextContainer>
                <S.Word>{word}</S.Word>
                <S.ResultDescContainer>
                    {desc.map((elem, i) => {
                        return <S.WordDesc key={i}>{i + 1}. {elem}</S.WordDesc>
                    })}
                </S.ResultDescContainer>
            </S.ResultTextContainer>
            <S.ResultExampleContainer>
                <Text.Label>{example}</Text.Label>
            </S.ResultExampleContainer>
        </S.SearchResult>
    )
}

interface IRelatedKeywordsProps {
    keyword: string[];
}

const RelatedKeywords = ({keyword}:IRelatedKeywordsProps) => {
    return (
        <S.RelatedKeywordsContainer>
            <Text.Caption>연관 검색어</Text.Caption>
            <S.RelatedKeywords>
                {keyword.map((elem) => {
                    return <S.RelatedKeyword>{elem}</S.RelatedKeyword>
                })}
            </S.RelatedKeywords>
        </S.RelatedKeywordsContainer>
    )
}

interface IQuizProps {
    quizCount: number;
    question: Object;
}

const Quiz = ({quizCount, question}:IQuizProps) => {
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
                <S.Tab><Text.Caption>즐겨찾기</Text.Caption><S.TabIndicator active/></S.Tab>
                <S.Tab><Text.Caption>오답</Text.Caption><S.TabIndicator/></S.Tab>
            </S.Tabs>
            
            <S.WordContainer>
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
            </S.WordContainer>
        </S.FavoriteWordContainer>
    )
}

const Sidebar = () => {
    return (
        <S.Sidebar>
            <Quiz />
            <FavoriteWord />
        </S.Sidebar>
    )
}

function Dictionary() {
    return (
        <S.Container>
            <S.DictionaryContainer>
                <Searchbar />
                <RelatedKeywords keyword={['abcde', 'abcde', 'ghj', 'sadfsadf']}/>
                <SearchResult word="CDC솔루션" desc={['마지막으로 추출한 이후 변경된 데이터만 골라내는 기술','마지막으로 추출한 이후 변경된 데이터만 골라내는 기술']} example="X-LOG for CDC: DB의 변경된 트랜잭션만 Redo Log에서 추출하여 복제하는 실시간 DB 복제 솔루션입니다."/>
                <SearchResult word="CDC솔루션" desc={['마지막으로 추출한 이후 변경된 데이터만 골라내는 기술','마지막으로 추출한 이후 변경된 데이터만 골라내는 기술']} example="X-LOG for CDC: DB의 변경된 트랜잭션만 Redo Log에서 추출하여 복제하는 실시간 DB 복제 솔루션입니다."/>
                <SearchResult word="CDC솔루션" desc={['마지막으로 추출한 이후 변경된 데이터만 골라내는 기술','마지막으로 추출한 이후 변경된 데이터만 골라내는 기술']} example="X-LOG for CDC: DB의 변경된 트랜잭션만 Redo Log에서 추출하여 복제하는 실시간 DB 복제 솔루션입니다."/>
            </S.DictionaryContainer>
            <Sidebar />
        </S.Container>
    )
}

export default Dictionary