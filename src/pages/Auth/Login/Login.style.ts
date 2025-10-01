import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`;

export const Image = styled.img.attrs({
    src: "https://i.pinimg.com/736x/f8/7d/84/f87d84d694270fc0ada11a2de830ccd3.jpg"
})`
    width: 50%;
    height: 100%;
    object-fit: cover;
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 64px;
    gap: 35px;
    width: 50%;
    height: 100%;
`;
export const Title = styled.h1`
    font-size: 32px;
    letter-spacing: -5%;
    text-align: center;
`;

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    gap: 36px;
`;

export const ElementContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

export const Label = styled.span`
    font-size: 16px;
    letter-spacing: -5%;
`;

export const InputBox = styled.div`
    display: flex;
    align-items: center;
    width: 440px;
    height: 48px;
    gap: 8px;
    padding: 0px 16px;
    border-radius: 12px;
    border: 1.5px solid #F2F2F2;
`;

export const Input = styled.input.attrs(props => ({type: props.type || "text", placeholder: props.placeholder}))`
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

export const SubmitButton = styled.button`
    width: 100%;
    height: 50px;
    border-radius: 12px;
    font-size: 20px;
    font-weight: bold;
    border: 0;
    background-color: ${(props) => props.theme.mainColor};
    color: white;
`;

export const SocialLogin = styled.div`
    display: flex;
    justify-content: center;
    gap: 60px;
    width: 440px;
    height: 64px;
`;

export const SocialIcon = styled.div<{img?: string}>`
    width: 64px;
    border-radius: 32px;
    background-image: url(${(props) => props.img});
    background-size: cover;
`;

export const Helper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: ${(props) => props.theme.textGray};
    & > span {
        font-size: 15px;
        letter-spacing: -2%;
    };
`;

export const Contour = styled.div`
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