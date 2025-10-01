import styled from "styled-components";

const Text = styled.h1`
    font-size: 32px;
    font-weight: bold;
    letter-spacing: -5%;
`;

interface TitleProps {
    text: string;
}

function Title(props: TitleProps) {
    return(
        <Text>{props.text}</Text>
    );
};

export default Title;