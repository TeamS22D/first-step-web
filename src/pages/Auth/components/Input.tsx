import type { ChangeEvent } from "react";
import styled from "styled-components";
import { forwardRef } from "react";

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
    @media (max-width: 425px) {
        width: 250px;
    }
`;

const VerifyBox = styled.div`
    width: 440px;
    height: 48px;
    display: flex;
    gap: 4px;
    @media (max-width: 425px) {
        width: 250px;
    }
`

const InputTag = styled.input.attrs(props => ({type: props.type || "text"}))`
    font-size: 16px;
    letter-spacing: -2%;
    color: #000000;
    height: 100%;
    width: 100%;
    border: 0;
    &::placeholder {
        color: ${(props) => props.theme.textSecondary};
    }
`;

const VerifyButton = styled.button`
    width: 99px;
    height: 100%;
    background-color: ${(props) => props.theme.textSecondary};
    border: 1.5px solid #f2f2f2;
    font-size: 15px;
    letter-spacing: -2%;
    color: #fff;
    border-radius: 10px;
`;

interface InputProps {
    label: string;
    type?: string;
    placeholder: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}


const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    return (
        <InputContainer>
            <Label>{props.label}</Label>
            <InputBox>
                <InputTag 
                    ref={ref} 
                    {...props} 
                />
            </InputBox>
        </InputContainer>
    );
});

const EmailInput = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const { onClick, label, ...rest } = props;

    return (
        <InputContainer>
            <Label>{label}</Label>
            <VerifyBox>
                <InputBox>
                    <InputTag 
                        ref={ref} 
                        {...rest}
                    />
                </InputBox>
                <VerifyButton onClick={onClick} type="button">
                    중복확인
                </VerifyButton>
            </VerifyBox>
        </InputContainer>
    );
});

export default {Input, EmailInput};