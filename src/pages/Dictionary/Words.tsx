import * as Text from "@/components/Text/Text.style"
import * as S from "./styles/Words.style"
import Searchbar from "@/components/Searchbar/Searchbar"
import { useCallback, useEffect, useState } from "react";
import Data from "./TestJSON/data.json";
import React from "react";
import * as I from "./types/Words.type"
import axios from "axios";

const Word = ({word, desc, example}:I.ISearchResultProps) => {
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

const RelatedKeywords = ({keyword, handleRelatedWord}:I.IRelatedKeywordsProps) => {
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

function Words() {
    const [rawWords, setRawWords] = useState<I.IWord[]>([]);
    const [words, setWords] = useState<I.IWord[]>([]);
    const [keyword, setKeyWord] = useState("");
    const [relatedWord, setRelatedWord] = useState<I.IWord[]>([]);

    //TODO: API 호출
    useEffect(() => {
        axios.get("http://10.80.161.41:3000/bizwords")
            .then(function (response) {
                setRawWords(response.data); setWords(response.data);
            }).catch(function (error) {
                alert("단어를 불러오지 못하였습니다 : " + error.message);
        })
        
    }, [])

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