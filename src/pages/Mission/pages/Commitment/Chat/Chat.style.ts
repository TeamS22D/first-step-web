import styled from 'styled-components'

export const Image = styled.img`
    width: 195px;
`

export const Body = styled.div`
    width: 75%;
    height: 110%;
    display: flex;
    justify-content: center;
`

export const Container = styled.div`
    display: flex;
    height: 770px;
    color: black;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid;
    border-radius: 10px;
    border: 2px solid #F2F2F2;
    background: #F2F2F2;
    flex-direction: column;
    padding: 15px 18px;
    
    gap: 20px;
`;

export const Contant = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    gap: 16px;
    flex-direction: column-reverse;

    overflow: hidden;
    overflow-y: auto;
`

export const InputBox = styled.div`
    border-radius: 10px;
    background: #FFF;
    display: inline-flex;
    padding: 5px 8px 5px 29px;
    align-items: center;
    gap: 12px;
`

type MyComponentProps = {
    placeholder: string;
  };

export const Input = styled.input<MyComponentProps>`
    width: 100%;
    height: 17px;
    border: none;
    outline: none;

    &::placeholder {
        color: #D9D9D9;
        font-family: "Pretendard Variable";
        font-size: 14px;
        font-weight: 500;
        letter-spacing: -0.7px;
  }
`

export const SendButton = styled.button`
    width: 45px;
    height: 43px;
    background-color: #0ACF83;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #fff;
    border-radius: 10px;
`
export const Send = styled.img`
    width: 21.17px;
    height: 19.17px;
`

//chat 메시지 창

interface MeSend {
    me?: boolean;
  }

export const messageWrapper = styled.div<MeSend>`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: ${props => (props.me? "flex-start" : "flex-end")};
`

export const message = styled.div<MeSend>`
    display: flex;
    align-items: center;
    padding: 8px 12px;
    border-radius: 10px;
    max-width: 350px;

    font-family: "Pretendard Variable";
    font-size: 16px;
    font-weight: 500;
    letter-spacing: -0.8px;

    background-color: ${props => (props.me? "#3FB98A" : "#FFFFFF")};
    color: ${props => (props.me? "#FFFFFF" : "#404040")};
`

// 상사 정보 
export const Introduction = styled.div`
    display: flex;
    height: 770px;
    color: black;
    margin-left: 20px;
    width: 38%;
    box-sizing: border-box;
    border: 1px solid;
    border-radius: 10px;
    border: 2px solid #F2F2F2;
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 41px 33px 0 33px;
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

export const BottomWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const atr = styled.div`
    display: flex;
    width: 100%;
    height: 80px;
    align-self: stretch;
    border-radius: 10px;
    background: #EAF8F2;
    align-items: center;
    gap: 17px;
    padding-left: 3px;
`

export const bar = styled.div`
    width: 6px;
    height: 70px;
    border-radius: 10px;
    background: #3FB98A;
`

export const FontWrapper = styled.div`
    width: 240px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 9px;
`

export const atrTitle = styled.div`
    color: #404040;
    font-family: "Pretendard Variable";
    font-size: 16px;
    font-weight: 600;
    letter-spacing: -0.8px;
`

export const atrSub = styled(atrTitle)`
    color: #6A6A6A;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: -0.6px;
`

