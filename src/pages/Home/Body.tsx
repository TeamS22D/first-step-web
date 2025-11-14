import { useEffect, useState } from "react";
import * as S from "./styles/Body.style";
import WeekCalendar from "./WeekCalendar";
import axios from "axios";


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
            {nowTime >= parseInt(props.time.slice(0, 2)) ? <S.Dot /> : <S.Dot active />}
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
            <S.Title>{props.title}<NewBadge /></S.Title>
            <S.Info><img src="https://media.discordapp.net/attachments/1359774260817563670/1437807765350387764/Timer.png?ex=69153f14&is=6913ed94&hm=4a432ced9982a2cfbe93c053e76ac3c1b3ed8238a4e97830187c07e3c7b3468b&=&format=webp&quality=lossless&width=22&height=28" alt="" />{props.createdAt}</S.Info>
        </S.Mission>
    )
}


const MissionList = (props: {missions: IMissionProps[]}) => {
    return (
        <S.MissionContainer>
                <S.TileTitle>오늘의 미션</S.TileTitle>
                <S.Line />
                <S.MissionList>
                    {props.missions.map((elem) => {
                        return(
                            <Mission title={elem.title} to={elem.to} createdAt={elem.createdAt}/>
                        )
                    })}
                </S.MissionList>
        </S.MissionContainer>
    )
}

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
            alert(error);
        })
    }, [])

    return (
        <S.CheeringContainer>
            <S.Cheering>
                <img src="https://media.discordapp.net/attachments/1359774260817563670/1437812908896813250/mingcute_fire-fill.png?ex=69149b1e&is=6913499e&hm=134bde387bd26f6c7c992eccee96d33f54e6d4588b36b5ced18fe059246f151f&=&format=webp&quality=lossless&width=110&height=126" alt="" />
                <S.CheeringTextContainer>
                    <S.CheeringTitle>연속 학습일</S.CheeringTitle>
                    <S.CheeringMessage><span>{data?.studyStreak}</span>일</S.CheeringMessage>
                </S.CheeringTextContainer>
            </S.Cheering>
            <S.Cheering>
                <img src="https://media.discordapp.net/attachments/1359774260817563670/1437812908510679171/Group_86.png?ex=69149b1e&is=6913499e&hm=e84efdc94553a22081f0bc3bfe35412f48a96471a4d392afa9b6e758f8ae749e&=&format=webp&quality=lossless&width=100&height=100" alt="" />
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
            setTodo(response.data)

            //테스트용 데이터
            setTodo([{title: "업무 보고서 작성", time: "20:00"}, {title: "업무 보고서 작성", time: "24:00"}])
        })
        .catch((error) => {
            alert(error.response.status)
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
                    {todo.map((elem) => {
                        return (
                            <Todo time={elem.time} title={elem.title} />
                        )
                    })}
                </S.TodoList>
            </S.Calendar>
        </S.Sidebar>
    )
}

function Body() {
    const [missions, setMissions] = useState<IMissionProps[]>([])

    useEffect(() => {
        axios.get("/api")
        .then((response) => {
            setMissions(response.data);

            //테스트용 데이터
            setMissions([{title: "dd", to: "", createdAt: "2025-11-05"},{title: "dd", to: "", createdAt: "2025-11-05"},{title: "dd", to: "", createdAt: "2025-11-05"}]);
        })
        .catch((error) => {
            alert(error.response.status)
        })
    }, [])

    return (
        <S.Body>
            <S.Contents>
                <S.RecommendContainer>
                    <Recommend title="실제 실무능력을 <br/>ai와 함께 체계적인<br/>미션 프로그램" img="https://media.discordapp.net/attachments/1359774260817563670/1437725009606082702/image_34.png?ex=69159ac1&is=69144941&hm=fda6a23f72ac2c27bf4f9ac24e4e41b813c379ee9a7eaf71588bb06813c7d925&=&format=webp&quality=lossless&width=204&height=158"/>
                    <Recommend title="모르는 실무 용어를<br/>쉽고 간편하게<br/>용어사전 프로그램" img="https://media.discordapp.net/attachments/1359774260817563670/1437725009606082702/image_34.png?ex=69159ac1&is=69144941&hm=fda6a23f72ac2c27bf4f9ac24e4e41b813c379ee9a7eaf71588bb06813c7d925&=&format=webp&quality=lossless&width=204&height=158"/>
                    <Recommend title="실제 실무능력을 <br/>ai와 함께 체계적인<br/>미션 프로그램" img="https://media.discordapp.net/attachments/1359774260817563670/1437725009606082702/image_34.png?ex=69159ac1&is=69144941&hm=fda6a23f72ac2c27bf4f9ac24e4e41b813c379ee9a7eaf71588bb06813c7d925&=&format=webp&quality=lossless&width=204&height=158"/>
                </S.RecommendContainer>
                <MissionList missions={missions}/>
            </S.Contents>
            <Sidebar />
        </S.Body>
    )
}

export default Body;