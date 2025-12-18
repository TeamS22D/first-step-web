import styled from 'styled-components'

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
