import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Image = styled.img.attrs({
    src: "https://i.pinimg.com/736x/f8/7d/84/f87d84d694270fc0ada11a2de830ccd3.jpg"})`
    width: 50%;
    height: 100%;
    object-fit: cover;
    @media screen and (max-width: 1300px) {
        display: none;
    }
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
    @media screen and (max-width: 1300px) {
        width: 100%;
    }
`;