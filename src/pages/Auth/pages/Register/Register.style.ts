import styled from "styled-components";

export const Error = styled.span`
    color: ${(props) => props.theme.error};
    width: 440px;
    @media (max-width: 425px) {
        width: 250px;
    }
`
export const Success = styled.span`
    color: ${(props) => props.theme.mainColor};
    width: 440px;
    @media (max-width: 425px) {
        width: 250px;
    }
`