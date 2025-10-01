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

export const Form = styled.form`
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

export const Helper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: ${(props) => props.theme.textGray};
    & > a {
        font-size: 15px;
        letter-spacing: -2%;
    };
`;

