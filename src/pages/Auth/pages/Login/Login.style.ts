import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`;

export const Helper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: ${(props) => props.theme.textSecondary};
    & > a {
        font-size: 15px;
        letter-spacing: -2%;
    };
`;

export const Error = styled.span`
    color: ${(props) => props.theme.error}
`