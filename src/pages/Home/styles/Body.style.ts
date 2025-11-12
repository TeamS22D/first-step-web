import { Body1, Caption, Label } from "@/components/Text/Text.style"
import { Link } from "react-router"
import styled from "styled-components"

export const Body = styled.div`
    width: 100%;
    display: flex;
    gap: 30px;
`

export const Contents = styled.div`
    width: 100%;
    min-width: 600px;
    display: flex;
    flex-direction: column;
    gap: 48px;
`

export const RecommendContainer = styled.div`
    width: 100%;
    display: flex;
    gap: 20px;
    justify-content: space-between;
`

export const Recommend = styled.div`
  position: relative;
  width: 100%;
  height: 185px;
  display: flex;
  flex-direction: column;
  padding: 36px 34px;
  gap: 16px;
  background-color: #EAF8F2;
  border-radius: 20px;

  img {
    position: absolute;
    width: 38%;
    right: 29px;
    bottom: 27px;
  }

  div {
    z-index: 1;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
  }
`;

export const RedirectBtn = styled.button`
    width: fit-content;
    padding: 6px 10px;
    background-color: ${(props) => props.theme.mainColor2};
    border: 0;
    border-radius: 7.75px;
    color: #fff;
    font-size: 12.4px;
`

export const MissionContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 34px 32px;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
`

export const Line = styled.div`
    width: 100%;
    height: 2px;
    background-color: #F4F4F4;
`

export const MissionList = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 38vh;
    overflow-y: scroll;
`

export const Mission = styled(Link)`
    display: flex;
    padding: 10px 0px;
    justify-content: space-between;
`

export const Title = styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
`

export const NewBadge = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px 6px;
    font-size: 10px;
    background-color: #ED6833;
    color: #fff;
    border-radius: 100px;
`

export const Info = styled.div`
    display: flex;
    width: fit-content;
    gap: 8px;
`

export const TileTitle = styled.h3`
    font-size: 20px;
    font-weight: 600;
`

export const Sidebar = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 44px;

    @media (max-width: 1400px) {
        display: none;
    }
`

export const CheeringContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 0px 20px;
`

export const Cheering = styled.div`
    display: flex;
    gap: 30px;
    align-items: center;
`

export const CheeringTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const CheeringTitle = styled(Caption)`
    font-weight: 400;
    color: #848484;
`

export const CheeringMessage = styled(Body1)`
    font-size: 20px;
    span {
        color: ${(props) => props.theme.mainColor2};
        font-weight: 600;
    }
`

export const Calendar = styled.div`
    width: 100%;
    height: 100%;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    padding: 30px 34px;
    display: flex;
    flex-direction: column;
    gap: 40px;
`

export const CalendarConatiner = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 44px;
`

export const DateContainer = styled.div`
    width: 100%;
    display: flex;
    gap: 4px;
    align-items: end;
`

export const Date = styled(Body1)`
    font-size: 20px;
`

export const Weekday = styled(Label)`
    font-size: 14px;
`

export const CrossLine = styled(Line)`
    width: 90%;
    height: 2px;
`

export const TodoList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const Todo = styled.div`
    width: 100%;
    display: flex;
    gap: 10px;
`

export const Dot = styled.div<{ active?: boolean }>`
    width: 15px;
    height: 15px;
    border-radius: 100px;
    background-color: ${(props) => (props.active? props.theme.mainColor2 : props.theme.textSecondary)};
`