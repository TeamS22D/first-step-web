import { Outlet } from "react-router";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 62px 205px;
  gap: 34px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const NewOutlet = styled(Outlet)`
  width: 100%;
`