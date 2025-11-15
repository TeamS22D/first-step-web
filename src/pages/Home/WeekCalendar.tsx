import { useState } from "react";
import styled from "styled-components";
import dayjs, { Dayjs } from "dayjs";
import "react-day-picker/dist/style.css";
import { Caption } from "@/components/Text/Text.style";

const WeekRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

const DayContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
`

const DayButton = styled.button<{ selected: boolean }>`
  all: unset;
  cursor: pointer;
  text-align: center;
  width: 42px;
  height: 42px;
  border-radius: 9999px;
  transition: all 0.2s ease;

  color: ${(props) => (props.selected ? "#fff" : "#000")};
  background-color: ${(props) => (props.selected ? props.theme.mainColor2 : "transparent")};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${(props) => (props.selected ? props.theme.mainColor2 : "#efffea")};
  }

  span {
    font-size: 0.75rem;
    font-weight: 500;
  }

  strong {
    font-size: 1rem;
    font-weight: bold;
  }

  .dot {
    width: 4px;
    height: 4px;
    background-color: ${(props) => (props.selected ? "#fff" : props.theme.mainColor2)};
    border-radius: 50%;
    margin-top: 4px;
  }
`;

function WeekCalendar({setSelDay}: {setSelDay: React.Dispatch<React.SetStateAction<string>>}) {
  //TODO: 서택된 요일 State를 받아와서 상위 컴포넌트에 전달 후 요일별 Todo 받아오기
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const startOfWeek = dayjs().startOf("week");

  const days = Array.from({ length: 7 }).map((_, i) => startOfWeek.add(i, "day"));

  const weekToKorean = {
    MON: "월",
    TUE: "화",
    WED: "수",
    THU: "목",
    FRI: "금",
    SAT: "토",
    SUN: "일"
  }

  const handleDateChange = (day: Dayjs) => {
    setSelDay(day.year() + "-" + (day.month()+1) + "-" + day.date())
  }

  return (
    <WeekRow>
    {days.map((day) => {
        const isSelected = selectedDate.isSame(day, "day");
        const Weekday = weekToKorean[day.format("ddd").toUpperCase() as keyof typeof weekToKorean];
        return (
        <DayContainer
            key={day.toString()}
        >
            {Weekday === "일" ? (<Caption style={{color: "#FF1313"}}>{Weekday}</Caption>) : Weekday === "토" ? (<Caption style={{color: "#0099FF"}}>{Weekday}</Caption>) : (<Caption>{Weekday}</Caption>)}
            <DayButton 
                selected={isSelected}
                onClick={() => {setSelectedDate(day); handleDateChange(day);}}
            >
                <strong>{day.format("D")}</strong>
            </DayButton>
        </DayContainer>
        );
    })}
    </WeekRow>
  );
}

export default WeekCalendar;