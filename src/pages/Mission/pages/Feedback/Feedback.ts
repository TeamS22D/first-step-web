import styled from 'styled-components';

export const Body = styled.div`
    width: 100%;
    height: 100%;
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
    gap: 38.77px;
    padding: 44px 51px;
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.10);

`

export const MiddleRatingContainer = styled.div`
    width: 100%;
    height: 24px;
    display: flex;
    gap: 15px;
    background-color:rgb(47, 198, 115);
`

export const MiddleRatingTextarea = styled.div`
    width: 100%;
    height: 145px;
    display: flex;
    align-items: center;

    color: #6A6A6A;
    font-family: "Pretendard Variable";
    font-size: 24px;
    font-weight: 400;
    letter-spacing: -1.2px;

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
`
export const BottomHelf = styled.div`
    width: 100%;
    height: 155px;
    padding: 22px 29px;
    display: flex;
    gap: 20px;
    flex-direction: column;

    border-radius: 10px;
    background: #EAF8F2;

    .TitleContainer{
        width: 80px;
        height: 25px;
    }
    
    .Title{
        display: flex;
        flex-direction: row;
        padding: 3px 18px;
        justify-content: center;
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
    }

`

export const BottomRightArea = styled(MiddleGraph)`
    width: 566px;
    height: 344px;
    padding: 36px 34px;
`

export const BottomRightAreaContainer = styled.div`
    display: flex;
    width: 498px;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
`

export const BottomRightAreaItem = styled.div`
    display: flex;
    width: 100%;
    height: 80px;
    padding: 5px 1px;
    align-items: center;
    gap: 17px;
`

export const Bar = styled.div`
    width: 6px;
    height: 70px;
    border-radius: 10px;
    background: #3FB98A;
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
`

export const buttoncontainer = styled.div`
    width: 100%;
    height: 110px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

export const backButton = styled.div`
    display: flex;
    width: 117px;
    height: 39px;
    padding: 8px 32px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 5px;
    background: #3FB98A;

    color: #FFF;

    /* Caption */
    font-family: "Pretendard Variable";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.8px;
`
