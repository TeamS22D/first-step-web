import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px 1vw;
`

export const MissionBox = styled.div`
  display: flex;
  align-items: end;
  width: 30%;
  height: 190px;
  border-radius: 20px;
  background-color: #E5E4E4;
  border: 2px solid #F2F2F2;
  overflow: hidden;
`

export const Mission = styled.div`
  display: flex;
  width: 100%;
  height: 158px;
  justify-content: space-between;
  padding: 20px 24px;
  flex-direction: column;
  border-radius: 30px 30px 0px 0px;
  background-color: #fff;
  box-shadow: ${(props) => props.theme.shadowLight};
`

export const StatusBadge = styled.div<{isNew?: boolean, isEndSoon?: boolean}>`
  display: flex;
  width: 50px;
  padding: 6px 0px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.isNew ? "#ED6833" : props.isEndSoon ? "#F1414C" : "#595959"};
  font-size: 12.4px;
  border-radius: 100px;
  color: #fff;
`

export const MissionTitle = styled.span`
  font-size: 15.5px;
  font-weight: 600;
  letter-spacing: -5%;
`

export const Deadline = styled.div`
  display: flex;
  font-size: 12px;
  gap: 8px;

  img {
    height: 12px;
  }
`

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
`

export const Button = styled.button<{active?: boolean}>`
  display: flex;
  padding: 6px 10px;
  background-color: ${(props) => props.active ? props.theme.mainColor2 : props.theme.backgroundLight};
  color: ${(props) => props.active ? '#fff' : props.theme.textThird};
  border: 0;
  border-radius: 7.75px;
`