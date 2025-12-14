import { useEffect, useState } from "react";
import * as S from "./styles/Body.style";
import WeekCalendar from "./WeekCalendar";
import axios from "axios";
import Timer from "@assets/Home/Timer.png"
import Circle from "@assets/Home/Circle.png"
import Fire from "@assets/Home/FireImg.png"


function daysFromToday(dateString: string): number {
  const targetDate = new Date(dateString);

  if (isNaN(targetDate.getTime())) {
    throw new Error("Invalid date format. Expected YYYY-MM-DD.");
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const diffMs = targetDate.getTime() - today.getTime();
  return Math.floor(diffMs / (1000 * 60 * 60 * 24));
}

const Recommend = (props: {title: string; img: string;}) => {
    return (
            <S.Recommend>
                <div dangerouslySetInnerHTML={{ __html: props.title }} />
                <img src={props.img} alt="이미지" />
                <S.RedirectBtn>
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



const Todo = (props: {time:string; title: string;}) => {
    const date = new Date();
    const nowTime = date.getHours();

    return (
        <S.Todo>
            {nowTime < parseInt(props.time.slice(0, 2)) ? <S.Dot active /> : <S.Dot />}
            <span>{props.time}</span>
            <span>{props.title}</span>
        </S.Todo>
    )
}

interface IMissionProps {
    title: string; 
    to: string;
    createdAt: string;
}

const Mission = (props: IMissionProps) => {
    return (
        <S.Mission to={props.to}>
            <S.Title>{props.title}{daysFromToday(props.createdAt) <= 3 ? <NewBadge /> : null}</S.Title>
            <S.Info><img src={Timer} alt="모래시계 이미지" />{props.createdAt}</S.Info>
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
                key={`${m.title}-${m.createdAt}-${i}`}
                title={m.title}
                to={m.to}
                createdAt={m.createdAt}
            />
            ))}
        </S.MissionList>
        </S.MissionContainer>
    );
};

interface IData {
    studyStreak: string;
    topPercent: string
}

const Cheering = () => {
    const [data, setData] = useState<IData>()

    useEffect(() => {
        axios.get("api")
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
                    <S.CheeringMessage><span>{data?.studyStreak}</span>일</S.CheeringMessage>
                </S.CheeringTextContainer>
            </S.Cheering>
            <S.Cheering>
                <img src={Circle} alt="원형 그래프 이미지" />
                <S.CheeringTextContainer>
                    <S.CheeringTitle>상위</S.CheeringTitle>
                    <S.CheeringMessage><span>{data?.topPercent}</span>%</S.CheeringMessage>
                </S.CheeringTextContainer>
            </S.Cheering>
        </S.CheeringContainer>
    )
}

interface ISidebarProps {
    title: string;
    time: string;
}

const Sidebar = () => {
    const [todo, setTodo] = useState<ISidebarProps[]>([]);
    const [selDay, setSelDay] = useState('');

    useEffect(() => {
        axios.get("/api", {
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
                            <Todo key={elem.time + elem.title} time={elem.time} title={elem.title} />
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
        axios.get("/Missionsapi")
        .then((response) => {
            if (Array.isArray(response.data)) {
                setMissions(response.data);
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
                {recommend.length === 0 ? null : (
                    <S.RecommendContainer>
                        {recommend.map((elem) => {
                            return(
                                <Recommend key={elem.title} title={elem.title} img={elem.img}/>
                            )
                        })}
                    </S.RecommendContainer>
                )}    
                <MissionList missions={missions}/>
            </S.Contents>
            <Sidebar />
        </S.Body>
    )
}

export default Body;