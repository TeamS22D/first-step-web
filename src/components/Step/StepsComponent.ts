import styled from 'styled-components';

export const Steps = styled.div`
    width: auto;
    height: auto;
    display: flex;
    align-items: center;
    gap: 8px;
`

export const Icon = styled.img`
    width: 20px;

    .Bottom {
        width: 16px;
    }
`

export const Step = styled.div`
    display: flex;
    padding: 12px 20px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 3.611px;
    background: ${(props) => props.color};
    border: 1.5px solid #F2F2F2;

    & > text {
    color: ${(props) => props.color};
    font-family: Inter;
    font-size: 14.444px;
    font-weight: 500;
  }
`
