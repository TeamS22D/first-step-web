import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    padding: 8px;
`

export const Contents = styled.div`
    flex: 1;
    height: 100%;
    overflow-y: auto;
    padding: 3rem;
    border-radius: 10px;
    box-shadow: 
        0px 1px 3px 1px rgba(0, 0, 0, 0.15),
        0px 1px 2px 0px rgba(0, 0, 0, 0.3);
    margin-left: 9px;
`