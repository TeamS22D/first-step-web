import styled from "styled-components";

const Button = styled.button`
    width: 100%;
    height: 50px;
    border-radius: 12px;
    font-size: 20px;
    font-weight: bold;
    border: 0;
    background-color: ${(props) => props.theme.mainColor};
    color: white;
`

interface SubmitButtonProps {
    text: string;
}

function SubmitButton(props: SubmitButtonProps) {
    return (
        <Button type="submit">{props.text}</Button>
    )
}

export default SubmitButton;