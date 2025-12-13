import styled from 'styled-components';


export const Icon = styled.img`
    width: 20px;

    .Bottom {
        width: 16px;
    }
`

export const Image = styled.img`
    width: 148px;
`

// Side

export const guideContainer = styled.div`
    height: 100%;
    width: 28%;
    border-radius: 10px;
    border: 2px solid #F2F2F2;
    display: flex;
    flex-direction: column;
    padding: 41px 30px 0 30px;
    gap: 30px;

`

export const TitleBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    height: 44px;

    .Title {
        font-family: "Pretendard Variable";
        color: #000;
        font-size: 20px;
        font-weight: 600;
        letter-spacing: -1px;
    }

    .SubTitle {
        color: #6A6A6A;
        font-size: 12px;
        font-weight: 400;
        letter-spacing: -0.6px;
    }
`

export const MiddleContainer = styled.div`
    width: 100%;
    height: 338px;
    display: flex;
    justify-content: space-between;
    flex-direction:column;
`

export const categoryContainer = styled.div`
    width: 100%;
    height: 9.75px;
    display: flex;
    gap: 4px;

`

interface CategoryProps {
    on?: boolean;
}

export const category = styled.div<CategoryProps>`
    display: flex;
    height: 25.751px;
    padding: 8px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 12px;
    background: ${props => (props.on? "#3FB98A" : "#F2F2F2")};

    color: ${props => (props.on? "#FFFFFF" : "#2B2B2B")}; 
    font-family: "Pretendard Variable";
    font-size: 10px;
    font-weight: 700;
    letter-spacing: -0.5px;
`

export const Word = styled.div`
    width: 100%;
    height: 299.175px;
    border-radius: 10px;
    background: #F2F2F2;
    display:flex;
    justify-content: center;
    padding: 24px;
    overflow-y: auto;

    color: #6A6A6A;
    font-family: "Pretendard Variable";
    font-size: 16px;
    font-weight: 500;
    line-height: 36px; /* 225% */
    letter-spacing: -0.8px;
`
export const BottomBox = styled.div`
    width: 100%;
    height: 292px;
    border-top: 1.8px solid #f2f2f2;
    padding: 13px 0 0 0;
    
`

export const BottomBoxTitle = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    gap: 8px;
    margin: 0 0 13px 0;

    text {
        color: #777;
        font-family: "Pretendard Variable";
        font-size: 16px;
        font-weight: 600;
        letter-spacing: -0.8px;
    }
`

export const Speech = styled.div`
    display: flex;
    width: 100%;
    height: 95px;
    padding: 21px 24px;
    justify-content: center;
    align-items: center;

    border-radius: 10px;
    background: #F7F5F5;

    color: #2B2B2B;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 14px;
    font-weight: 500;
    letter-spacing: -0.7px;
`
    

