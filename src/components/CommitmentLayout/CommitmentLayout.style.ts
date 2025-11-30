import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 62px;
    align-items: center;
`;

export const Body = styled.div`
    display: flex;
    gap: 20px;
    width: 100%;
    height: 100%;
    padding: 0px 52px;
`;


export const TopContainer = styled.div`
    width: 100%;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;

`

export const BottomContainer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    gap: 16px;
    justify-content: flex-end;
    padding: 0 52px;
`



interface ButtonProps {
    primary?: boolean;
    border?: boolean;
    color?: boolean;
  }
export const button = styled.button<ButtonProps>`
    display: flex;
    height: 39px;
    padding: 8px 32px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 5px;
    border: 1.5px solid #3FB98A;

    color: ${props => (props.color? "#FFFFFF" : "#3FB98A")};
    background:${props => (props.primary ? "#3FB98A" : "#FFFFFF")};
`



