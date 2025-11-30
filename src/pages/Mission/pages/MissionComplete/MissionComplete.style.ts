import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 36px;
    align-items: center;
`;

export const Body = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 12px;
`;


export const TopContainer = styled.div`
    width: 100%;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;

`

export const Image = styled.img`
    width: 180px;
`

export const container = styled.div`
    width: 427px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`

export const Speech = styled.div`
    display: flex;
    padding: 28px 32px;
    border-radius: 10px;
    background: #F7F5F5;

    color: #2B2B2B;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 24px;
    font-weight: 500;
    letter-spacing: -1.2px;

    white-space: pre-wrap; /* 줄바꿈(\n) 적용 오옹 */
`
    
export const buttoncontainer = styled.div`
    width: 544px;
    height: 152px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 12px;
`

export const Button1 = styled.button`
    display: flex;
    height: 70px;
    padding: 12px 0;
    justify-content: center;
    align-items: center;

    border: none;
    color: #FFF;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -1px;
    border-radius: 12px;
    background: #3FB98A;
`

export const Button2 = styled.button`
    display: flex;
    height: 70px;
    padding: 12px 0;
    justify-content: center;
    align-items: center;

    color: #3FB98A;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -1px;
    border-radius: 12px;
    border: 2px solid #3FB98A;
    background: #FFF;
    `