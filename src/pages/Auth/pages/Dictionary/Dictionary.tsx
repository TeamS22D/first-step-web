import * as Text from "@/components/Text/Text.style"
import * as S from "./Dictionary.style"
import Searchbar from "@/components/Searchbar/Searchbar"
import Star from "@assets/Dictionary/Star.svg?react"
import { useEffect, useState } from "react";
import Data from "./data.json";

interface ISearchResultProps {
    word: string;
    desc: string[];
    example: string;
}

const Word = ({word, desc, example}:ISearchResultProps) => {
    return (
        <S.WordContainer>
            <S.WordInfo>
                <S.Word>{word}</S.Word>
                <S.WordDescContainer>
                    {desc.map((elem, i) => {
                        return <S.WordDesc key={i}>{i + 1}. {elem}</S.WordDesc>
                    })}
                </S.WordDescContainer>
            </S.WordInfo>
            <S.ExampleContainer>
                <Text.Label>{example}</Text.Label>
            </S.ExampleContainer>
        </S.WordContainer>
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

interface IWord {
  word: string;
  desc: string[];
  example: string;
}

function Dictionary() {
    const [words, setWords] = useState<IWord[]>([]);
    const [keyWord, setKeyWord] = useState("");

    //TODO: API 호출
    useEffect(() => {setWords(Data)}, [])

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setKeyWord(e.target.value);
    }

    return (
        <S.Container>
            <S.DictionaryContainer>
                <Searchbar onChange={onChange}/>
                <RelatedKeywords keyword={['abcde', 'abcde', 'ghj', 'sadfsadf']}/>
                {words.map((elem) => {
                    return <Word word={elem.word} desc={elem.desc} example={elem.example} />
                })}
            </S.DictionaryContainer>
            <Sidebar />
        </S.Container>
    )
}

export default Dictionary