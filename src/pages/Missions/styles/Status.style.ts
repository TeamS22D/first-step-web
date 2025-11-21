import styled from "styled-components";

export const Status = styled.div`
  display: flex;
  justify-content: space-between;
`

export const StatusBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 19px;
  background-color: ${(props) => props.theme.bgPrimary};
`