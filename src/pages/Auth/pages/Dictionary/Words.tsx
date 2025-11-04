import * as Text from "@/components/Text/Text.style"
import * as S from "./Dictionary.style"
import Searchbar from "@/components/Searchbar/Searchbar"
import { useCallback, useEffect, useState } from "react";
import Data from "./data.json";
import React from "react";

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
    handleRelatedWord: (value: string) => void
}

const RelatedKeywords = ({keyword, handleRelatedWord}:IRelatedKeywordsProps) => {
    return (
        <S.RelatedKeywordsContainer>
            <Text.Caption>연관 검색어</Text.Caption>
            <S.RelatedKeywords>
                {keyword.map((elem, i) => {
                    return i < 4 ? <S.RelatedKeyword key={i} onClick={() => handleRelatedWord(elem)}>{elem}</S.RelatedKeyword> : null
                })}
            </S.RelatedKeywords>
        </S.RelatedKeywordsContainer>
    )
}

interface IWord {
  word: string;
  desc: string[];
  example: string;
}

function Words() {
    const [rawWords, setRawWords] = useState<IWord[]>([]);
    const [words, setWords] = useState<IWord[]>([]);
    const [keyword, setKeyWord] = useState("");
    const [relatedWord, setRelatedWord] = useState<IWord[]>([]);

    //TODO: API 호출
    useEffect(() => {setRawWords(Data); setWords(Data);}, [])

    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setKeyWord(e.target.value);
    }, [])

    useEffect(() => {if(keyword!=="") {
        const filteredWord = rawWords.filter((elem) => {
            const newKeyword = keyword.toLowerCase().replace(/ /g,"");
            if (elem.word.replace(/ /g,"").toLowerCase().includes(newKeyword)) {
                return true;
            }
            for (let i = 0; i < elem.desc.length; i++) {
                if (elem.desc[i].replace(/ /g,"").toLowerCase().includes(newKeyword)) {
                    return true;
                }
            }
            return false;
        });
        setWords(filteredWord);
        } else {
            setWords(rawWords);
        }
    }, [keyword, rawWords]);

    useEffect(() => {
        if (words.length >= 1) {
            if (words.length >= 10) {
                setRelatedWord(words.slice(5, 9))
            } else {
                setRelatedWord(words.slice(0, 4))
            }
        }
    },[words])

    const handleRelatedWord = (value: string) => {
        setKeyWord(value)
    }

    return (
        <S.DictionaryContainer>
            <Searchbar onChange={onChange} value={keyword}/>
            <RelatedKeywords handleRelatedWord={handleRelatedWord} keyword={relatedWord.map((elem) => {return elem.word})}/>
            {words.map((elem) => {
                return <Word key={elem.word} word={elem.word} desc={elem.desc} example={elem.example} />
            })}
        </S.DictionaryContainer>
    )
}

export default React.memo(Words)