import type { ChangeEvent } from "react";
import styled from "styled-components";

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

const Label = styled.span`
    font-size: 16px;
    letter-spacing: -5%;
`;

const InputBox = styled.div`
    display: flex;
    align-items: center;
    width: 440px;
    height: 48px;
    gap: 8px;
    padding: 0px 16px;
    border-radius: 12px;
    border: 1.5px solid #F2F2F2;
`;

const InputTag = styled.input.attrs(props => ({type: props.type || "text"}))`
    font-size: 16px;
    letter-spacing: -2%;
    color: #000000;
    height: 100%;
    width: 100%;
    border: 0;
    &::placeholder {
        color: ${(props) => props.theme.textGray};
    }
`;

interface InputProps {
    label: string;
    type: string;
    placeholder: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

function Input(props: InputProps) {
    return (
        <InputContainer>
            <Label>{props.label}</Label>
            <InputBox>
                <InputTag type={props.type} onChange={props.onChange} placeholder={props.placeholder}/>
            </InputBox>
        </InputContainer>
    )
};

export default Input;