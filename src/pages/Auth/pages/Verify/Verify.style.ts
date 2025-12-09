import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  gap: 90px;
  align-items: center;
  padding: 156px 0px 0px 0px;
  * {
      margin: 0px;
  }
`

export const Body = styled.div`
  display: flex;
  width: 540px;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  gap: 56px;
  padding: 0px;
  color: #9F9C9C;
  font-size: 18px;
  h1 {
      font-size: 38px;
  }
`

export const EmailContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 9px;
`

export const Email = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 58px;
  background-color: #FCFCFC;
  color: #000;
  border-radius: 11.65px;
  border: 0;
  text-align: center;
  font-size: 20px;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
  }
`

export const DeadlineMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: #9F9C9C;
`

export const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 58px;
  border: 0;
  background-color: ${(props) => props.theme.mainColor};
  color: #fff;
  border-radius: 11.65px;
  font-size: 17.48px;
  font-weight: bold;
`

export const WarningContainer = styled.div`
  width: 540px;
  height: 152px;
  background-color: #FCFCFC;
  display: flex;
  flex-direction: column;
  gap: 11px;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 11.65px;
  border-top: 1.75px solid #D9D9D9;
  color: #9F9C9C;
  h5 {
      color: #606060;
  }
`

export const Error = styled.span`
  color: ${(props) => props.theme.error};
  width: 100%;
  @media (max-width: 425px) {
      width: 250px;
  }
`