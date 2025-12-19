import { useNavigate } from "react-router";
import * as S from "../styles/MissionList.style"
import Timer from "@assets/Home/Timer.png"

const getDaysDiff = (dateStr: string): number => {
  const today = new Date();
  const target = new Date(dateStr);
  
  today.setHours(0, 0, 0, 0);
  target.setHours(0, 0, 0, 0);
  
  const diffMs = Math.abs(today.getTime() - target.getTime());
  
  return Math.ceil(diffMs / (1000 * 60 * 60 * 24));
};

const Mission = (props: IMissions) => {
  const diffDayFromStart = getDaysDiff(props.startDate);
  const diffDayToDeadLine = getDaysDiff(props.endDate);
  const navigate = useNavigate();

  return (
    <S.MissionBox>
      <S.Mission>
        {diffDayToDeadLine < 3 ? <S.StatusBadge isEndSoon>D-{diffDayToDeadLine}</S.StatusBadge> : diffDayFromStart < 2 ? <S.StatusBadge isNew>{"NEW"}</S.StatusBadge> : <S.StatusBadge>D-{diffDayToDeadLine}</S.StatusBadge>}
        <S.MissionTitle>{props.missionName}</S.MissionTitle>
        <S.Deadline><img src={Timer} />{props.endDate.slice(0, 10)}</S.Deadline>
        <S.Buttons>
          <S.Button onClick={() => navigate(`/user-mission/feedback/${props.userMissionId}`)}>시작하기</S.Button>
        </S.Buttons>
      </S.Mission>
    </S.MissionBox>
  )
}

interface IMissions {
  userMissionId: number,
  missionName: string,
  missionTheme: "email" | "chat" | "document",
  startDate: string,
  endDate: string
}

function FeedbackList({ category, missions }: { category: string; missions: IMissions[]; }) {
  let isRendered = false;

  return (
    <S.Container>
      {missions.length !== 0 ? missions.map((elem) => {
        switch (category) {
          case "all":
          case elem.missionTheme:
            isRendered = true;
            return (<Mission {...elem} />);
          default:
            return null;
        }
      }) : <div>미션이 없습니다.</div>}
      {!isRendered ? <div>미션이 없습니다.</div> : null}
    </S.Container>
  )
}

export default FeedbackList;