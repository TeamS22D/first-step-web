import { useEffect, useState } from "react";
import * as S from "./styles/Body.style";
import WeekCalendar from "./WeekCalendar";
import axios from "axios";
import Timer from "@assets/Home/Timer.png"
import Circle from "@assets/Home/Circle.png"
import Fire from "@assets/Home/FireImg.png"
import Books from "@assets/Home/Books.png"
import QA from "@assets/Home/QA.png"
import Reminder from "@assets/Home/Reminder.png"
import axiosInstance from "@/hooks/axiosInstance";
import { useNavigate } from "react-router";
const SERVER_URL = import.meta.env.VITE_BASE_URL;

function daysFromToday(dateString: string | undefined | null): number {
  // 1. 데이터가 아예 없는 경우 방어
  if (!dateString) return 0;

  const targetDate = new Date(dateString);

  // 2. 날짜 형식이 이상한 경우 (에러 던지지 말고 0 리턴)
  if (isNaN(targetDate.getTime())) {
    console.warn("Invalid date format:", dateString); // 디버깅용 로그
    return 0; 
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const diffMs = targetDate.getTime() - today.getTime();
  return Math.floor(diffMs / (1000 * 60 * 60 * 24));
}

const Recommend = (props: {title: string; img: string;}) => {
    const navigate = useNavigate();
    return (
            <S.Recommend>
                <div dangerouslySetInnerHTML={{ __html: props.title }} />
                <img src={props.img} alt="이미지" />
                <S.RedirectBtn onClick={() => navigate("/mission/all")}>
                    시작하기
                </S.RedirectBtn>
            </S.Recommend>
    )
}

const NewBadge = () => {
    return (
        <S.NewBadge>New</S.NewBadge>
    )
}



const Todo = (props: {title: string; completed: boolean;}) => {
    const date = new Date();
    const nowTime = date.getHours();

    return (
        <S.Todo>
            {!props.completed ? <S.Dot active /> : <S.Dot />}
            <span>{props.title}</span>
        </S.Todo>
    )
}

interface IMissionProps {
    missionName: string; 
    userMissionId: string;
    endDate: string;
}

const Mission = (props: IMissionProps) => {
    return (
        <S.Mission to={props.userMissionId}>
            <S.Title>{props.missionName}{daysFromToday(props.endDate) <= 3 ? <NewBadge /> : null}</S.Title>
            <S.Info><img src={Timer} alt="모래시계 이미지" />{props.endDate}</S.Info>
        </S.Mission>
    )
}


const MissionList = (props: {missions: IMissionProps[]}) => {
    // 혹시 부모가 실수로 잘못된 값을 넘길 경우 (타입 안전성을 더 강화)
    if (!Array.isArray(props.missions)) {
        return (
        <S.MissionContainer>
            <S.TileTitle>오늘의 미션</S.TileTitle>
            <S.Line />
            <p>데이터 형식 오류</p>
        </S.MissionContainer>
        );
    }

    if (props.missions.length === 0) {
        return (
        <S.MissionContainer>
            <S.TileTitle>오늘의 미션</S.TileTitle>
            <S.Line />
            <p>미션이 없습니다.</p>
        </S.MissionContainer>
        );
    }

    return (
        <S.MissionContainer>
        <S.TileTitle>오늘의 미션</S.TileTitle>
        <S.Line />
        <S.MissionList>
            {props.missions.map((m, i) => (
            <Mission
                key={`${m.missionName}-${m.endDate}-${i}`}
                missionName={m.missionName}
                userMissionId={m.userMissionId}
                endDate={m.endDate}
            />
            ))}
        </S.MissionList>
        </S.MissionContainer>
    );
};

interface IData {
    name: string,
    streak: number,
    rank: number,
    totalUsers: number,
    percentile: number
}

const Cheering = () => {
    const [data, setData] = useState<IData>()

    useEffect(() => {
        axiosInstance.get(`${SERVER_URL}/user/profile/percent`)
        .then((response) => {
            setData(response.data);
        })
        .catch((error) => {
            alert("학습 정보를 불러오는데 실패했습니다." + error.response.status);
        })
    }, [])

    return (
        <S.CheeringContainer>
            <S.Cheering>
                <img src={Fire} alt="불 이미지" />
                <S.CheeringTextContainer>
                    <S.CheeringTitle>연속 학습일</S.CheeringTitle>
                    <S.CheeringMessage><span>{data?.streak}</span>일</S.CheeringMessage>
                </S.CheeringTextContainer>
            </S.Cheering>
            <S.Cheering>
                <img src={Circle} alt="원형 그래프 이미지" />
                <S.CheeringTextContainer>
                    <S.CheeringTitle>상위</S.CheeringTitle>
                    <S.CheeringMessage><span>{data?.percentile}</span>%</S.CheeringMessage>
                </S.CheeringTextContainer>
            </S.Cheering>
        </S.CheeringContainer>
    )
}

interface ISidebarProps {
    userMissionId: number;
    missionName: string;
    completed: boolean;
}

const Sidebar = () => {
    const [todo, setTodo] = useState<ISidebarProps[]>([]);
    const [selDay, setSelDay] = useState('');

    useEffect(() => {
        axiosInstance.get(`${SERVER_URL}/user/timeLine`, {
            params: {selDay}
        })
        .then((response) => {
            const normalized: ISidebarProps[] = Array.isArray(response.data)
            ? response.data
            : Array.isArray(response.data?.todos)
            ? response.data.todos
            : [];

            setTodo(normalized);

            //테스트용 데이터
            // setTodo([{title: "업무 보고서 작성", time: "20:00"}, {title: "업무 보고서 작성", time: "24:00"}])
        })
        .catch((error) => {
            alert("일정을 불러오는데 실패했습니다." + error.response.status);
            setTodo([]);
        })
    },[selDay])

    const date = new Date();
    const weekToKorean: Record<string, string> = {
        "0": "월",
        "1": "화",
        "2": "수",
        "3": "목",
        "4": "금",
        "5": "토",
        "6": "일"
    }

    return (
        <S.Sidebar>
            <Cheering />
            <S.Calendar>
                <S.CalendarConatiner>
                    <S.DateContainer>
                        <S.Date>
                            {date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()}
                        </S.Date>
                        <S.Weekday>
                            {weekToKorean[String(date.getDay())]}
                        </S.Weekday>
                    </S.DateContainer>
                    <WeekCalendar setSelDay={setSelDay}/>
                </S.CalendarConatiner>
                <S.CrossLine />
                <S.TodoList>
                    {todo.length > 0 ? (todo.map((elem) => {
                        return (
                            <Todo key={elem.missionName + elem.userMissionId} title={elem.missionName} completed={elem.completed} />
                        )
                    })) : null}
                </S.TodoList>
            </S.Calendar>
        </S.Sidebar>
    )
}

interface IRecommendProps {
    title: string;
    img: string;
}

function Body() {
    const [missions, setMissions] = useState<IMissionProps[]>([])
    const [recommend, setRecommend] = useState<IRecommendProps[]>([])

    useEffect(() => {
        axiosInstance.get(`${SERVER_URL}/user/todaysMission`)
        .then((response) => {
            if (Array.isArray(response.data)) {
                setMissions(response.data.map((item: IMissionProps) => ({
                    ...item,
                    endDate: item.endDate.slice(0, 10)
                })));
            }

            //테스트용 데이터
            // setMissions([{title: "업무 보고서 작성", to: "", createdAt: "2025-11-05"},{title: "거래처 메일 전송", to: "", createdAt: "2025-11-05"},{title: "팀장님꼐 보고서 전달", to: "", createdAt: "2025-11-05"}]);
        })
        .catch((error) => {
            alert("미션 목록을 불러오는데 실패했습니다." + error.response.status)
        })

        axios.get("/Recommendapi")
        .then((response) => {
            if (Array.isArray(response.data)) {
                setRecommend(response.data);
            }
        })
        .catch((error) => {
            alert(error.response.status)
        })

    }, [])

    return (
        <S.Body>
            <S.Contents>
                <S.RecommendContainer>
                    <Recommend title={"실제 실무능력을 <br>ai와 함께 체계적인<br>미션 프로그램"} img={Reminder}/>
                    <Recommend title={"모르는 실무 용어를<br>쉽고 간편하게<br>용어사전 프로그램"} img={Books}/>
                    <Recommend title={"내 특별 학습 코칭<br> ai선생님의 전문적인<br>피드백 프로그램"} img={QA}/>
                </S.RecommendContainer>
                <MissionList missions={missions}/>
            </S.Contents>
            <Sidebar />
        </S.Body>
    )
}

export default Body;