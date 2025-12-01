import styled from 'styled-components'

export const Image = styled.img`
    width: 195px;
`

export const Body = styled.div`
    width: 68%;
    height: 110%;
    display: flex;
    justify-content: center;
`

export const Container = styled.div`
    display: flex;
    height: 770px;
    color: black;
    width: 75%;
    box-sizing: border-box;
    border: 1px solid;
    border-radius: 10px;
    border: 2px solid #F2F2F2;
    background: #F2F2F2;
`;

export const Introduction = styled.div`
    display: flex;
    height: 770px;
    color: black;
    margin-left: 20px;
    width: 40%;
    box-sizing: border-box;
    border: 1px solid;
    border-radius: 10px;
    border: 2px solid #F2F2F2;
    display: flex;
    flex-direction: column;
    gap: 33px;
    padding: 41px 25px 0 25px;
    align-items: center;
`;

export const TopWrapper = styled.div`
    width: 288px;
    height: 311px;
    display: flex;
    flex-direction: column;
    gap: 38px;
`

export const Title = styled.div`
    width: 100%;
    height: auto;

    color: #000;
    font-family: "Pretendard Variable";
    font-size: 20px;
    font-weight: 600;
    letter-spacing: -1px;
`

export const FirmInpormation = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 28.35px;
    align-items: center;
`

export const InpormationWrapper = styled.div`
    display: flex;
    width: auto;
    height: auto;
    align-items: center;
    gap: 8px;
`

export const name = styled.span`
    color: #000;
    font-family: "Pretendard Variable";
    font-size: 16px;
    font-weight: 400;
    letter-spacing: -0.8px;
`

export const age = styled(name)`
    font-size: 14px;
`

export const slash = styled.span`
    stroke: #B2B2B2;
`