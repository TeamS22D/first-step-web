import styled from "styled-components";

const ContourContainer = styled.div`
    display: flex;
    width: 440px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    & > span {
        width: 100%;
        color: ${(props) => props.theme.textSecondary}
    }
    & > div {
        width: 100%;
        height: 1px;
        background-color: ${(props) => props.theme.textSecondary};
    }

    @media (max-width: 425px) {
        width: 250px;
        & > span {
            font-size: 12px;
            text-align: center;
        }
        & > dic {
            width: 80%;
        }
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