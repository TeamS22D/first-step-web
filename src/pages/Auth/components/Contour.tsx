import styled from "styled-components";

const ContourContainer = styled.div`
    display: flex;
    width: 440px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    & > span {
        width: 100%;
        color: ${(props) => props.theme.textGray}
    }
    & > div {
        width: 100%;
        height: 1px;
        background-color: ${(props) => props.theme.textGray};
    }
`;

interface ContourProps {
    text: string;
}

function Contour(props: ContourProps) {
    return (
        <ContourContainer>
            <div />
            <span>{props.text}</span>
            <div />
        </ContourContainer>
    )
}

export default Contour