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

interface StepProps {
    on?: boolean;
  }

export const Step = styled.div<StepProps>`
    display: flex;
    padding: 12px 20px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 3.611px;
    background: ${props => (props.on? "#3FB98A" : "#FFFFFF")};
    border: 1.5px solid ${props => (props.on? "#FFFFFF" : "#F2F2F2")};

    color: ${props => (props.on? "#FFFFFF" : "#2B2B2B")};
    font-family: Inter;
    font-size: 14.444px;
    font-weight: 500;
  
`
