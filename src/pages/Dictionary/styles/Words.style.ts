import styled from "styled-components";
import * as Text from "@/components/Text/Text.style"


export const WordContainer = styled.div`
    width: 100%;
    padding: 24px 24px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-bottom: 1px solid #F2F2F2;
`

export const WordInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const Word = styled(Text.Body2)`
    width: fit-content;
    background-color: #E1FFE1;
    color: #0ACF83;
`

export const WordDescContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
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

export const RelatedKeywordsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    padding: 12px 16px;
    border-top: 1px solid #F2F2F2;
`

export const RelatedKeyword = styled(Text.Label).attrs({ as: "button" })`
    color: #2EA91D;
    background: none;
    border: 0;
`

export const RelatedKeywords = styled.div`
    display: flex;
    gap: 24px;
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