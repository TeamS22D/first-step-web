import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
`

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 62px;
    align-items: center;
`;
export const TopContainer = styled.div`
    width: 100%;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;

`

export const Body = styled.div`
    width: 100%;
    height: 90%;
    padding: 15px 75px 0px 70px;
    display: flex;
    flex-direction: column;
    gap: 34px;
`

export const TitleBox = styled.div`
    width: 100%;
    height: 64px;
    display: flex;
    gap: 12px;
    flex-direction: column;
`

export const TitleTopContainer = styled.div`
    width: 100%;
    height: 38px;
    display: flex;
    gap: 18px;
    align-items: center;


`
export const TitleText = styled.span`
    color: #000;
    font-family: "Pretendard Variable";
    font-size: 32px;
    font-weight: 600;
    letter-spacing: -1.6px;
`

export const period = styled.div`
    display: flex;
    padding: 3.1px 12.4px;
    justify-content: center;
    align-items: center;
    border-radius: 18.603px;
    background: #595959;

    color:  #FFF;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 12.402px;
    font-weight: 600;
    letter-spacing: -0.62px;
`

export const TitleBottomContainer = styled(TitleTopContainer)`
    height: 19px;
    display: flex;
    gap: 12px;

    color: #6A6A6A;
    font-family: "Pretendard Variable";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.8px;

    .date{
        font-weight: 600; 
    }
`

export const MiddleContainer = styled.div`
    height: 315px;
    width: 100%;
    display: flex;
    gap: 44px;
    padding: 6px 0 0 0;
`

export const MiddleGraph = styled.div`
    width: 311px;
    height: 100%;
    display: flex;
    justify-content: conter;
    align-items: center;
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.10);
`

export const MiddleEvaluation = styled.div`
    width: 809px;
    height: 315px;
    display: flex;
    flex-direction: column;
    padding: 44px 51px;
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.10);
    gap: 32px;
`

export const MiddleRatingContainer = styled.div`
    width: 100%;
    height: 24px;
    display: flex;
    gap: 15px;
`

export const MiddleRatingContainerStars = styled.div`
    display: flex;
    width: 133px;
    align-items: center;
    gap: 4px;
`

export const Image = styled.img`
    width: 24px;
    height: 23.226px;
`

export const MiddleRatingContainerScore = styled.span`
    display: inline-block;
    color: #595959;
    font-family: "Pretendard Variable";
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -1px;
`

export const MiddleRatingTextareaContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
`

export const MiddleRatingTextarea = styled.span`
    color: #6A6A6A;
    font-family: "Pretendard Variable";
    font-size: 24px;
    font-weight: 400;
    letter-spacing: -1.2px;
    line-height: 26px;

    white-space: pre-wrap; /* 줄바꿈(\n) 적용 오옹 */
`

export const BottomContainer = styled.div`
    width: 100%;
    height: 344px;
    display: flex;
    gap: 36px;
`

export const BottomLeftContainer = styled.div`
    display: flex;
    width: 562px;
    height: 100%;
    flex-direction: column;
    gap: 34px;
    overflow-y: scroll;
`
export const BottomHelf = styled.div`
    width: 100%;
    height: auto;
    padding: 22px 29px;
    display: flex;
    gap: 20px;
    flex-direction: column;

    border-radius: 10px;
    background: #EAF8F2;


    .TitleContainer{
        width: auto;
        height: 25px;
    }
    
    .Title{
        display: inline-block;
        flex-direction: row;
        padding: 4px 18px;
        align-items: center;
        border-radius: 5px;
        background: #3FB98A;

        color: #FFF;
        font-family: "Pretendard Variable";
        font-size: 16px;
        font-weight: 400;
        letter-spacing: -0.8px;
    }

    .Textarea {
        width: 505px;
        height: auto;
        color: #6A6A6A;
        font-family: "Pretendard Variable";
        font-size: 18px;
        font-weight: 400;
        letter-spacing: -0.9px;
        line-height: 24px;
    }

`

export const BottomRightArea = styled(MiddleGraph)`
    width: 566px;
    height: 344px;
    padding: 36px 34px;


`

export const BottomRightAreaContainer = styled.div`
    display: flex;
    height: 100%;
    width: 498px;
    flex-direction: column;
    gap: 16px;

    max-height: 100%;
    overflow-y: auto;
`

export const BottomRightAreaItem = styled.div`
    display: flex;
    width: 100%;
    height: 80px;
    padding: 5px 1px;
    gap: 17px;

`

export const Bar = styled.div`
    width: 6px;
    height: 70px;
    border-radius: 10px;
    background: ${({ color }) =>
        color === '0' // green
            ? "#3FB98A"
        : color === '1' // blue
            ? "#09F"
        : color === '2' // purple
            ? "#AF5EFF"
        :color === '3' // green
            ? "#3FB98A"
        : color === '4' // blue
            ? "#09F"
        : "#3FB98A"  // 기본값
        };
    `

export const ItemContent = styled.div`
    display: flex;
    flex: 1;
    height: 100%;
    flex-direction: column;
    justify-content: center; 
`

export const Title = styled.span`
    height: 27px;
    font-family: "Pretendard Variable";
    font-size: 20px;
    font-weight: 600;
    color: #404040;
    letter-spacing: -1px;
`

export const Sub = styled.span`
    font-family: "Pretendard Variable";
    font-size: 15px;
    font-weight: 400;
    color: #6A6A6A;
    letter-spacing: -0.75px;
    line-height: 17px;
`

export const buttoncontainer = styled.div`
    width: 100%;
    height: 110px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

export const backButton = styled.button`
    display: flex;
    width: auto;
    height: auto;
    padding: 8px 32px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 5px;
    background: #3FB98A;
    border: none;

    color: #FFF;

    /* Caption */
    font-family: "Pretendard Variable";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.8px;
`

export const gongback = styled.div`
    width: 100%;
    height: 42px;
`