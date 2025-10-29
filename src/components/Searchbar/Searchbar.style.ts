import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 12px 0px;
`

export const Searchbar = styled.div`
    display: flex;
    align-items: center;
    width: 400px;
    padding: 10px;
    border: 0.8px solid #EBEBEB;
    border-radius: 8px;
    gap: 12px;
    img {
        width: 18px;
    }
    input {
        width: 100%;
        font-weight: 600;
        font-size: 11.85;
        border: none
    }

    input:focus {
        outline: none;
    }

    input::placeholder {
        color: #D9D9D9;
    }
`