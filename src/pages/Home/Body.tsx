import * as S from "./styles/Body.style";
import WeekCalendar from "./WeekCalendar";

const Recommend = () => {
    return (
            <S.Recommend>
                <span>모르는 실무 용어를<br/>
                쉽고 간편하게<br/>
                용어사전 프로그램</span>
                <img src="https://media.discordapp.net/attachments/1359774260817563670/1437725009606082702/image_34.png?ex=69144941&is=6912f7c1&hm=23ef4a24a66416ed2a1ca9b619b7238d8783cc7fe6475c6b0598951b17d5fd4c&=&format=webp&quality=lossless&width=204&height=158" alt="" />
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

const Mission = () => {
    return (
        <S.Mission to="">
            <S.Title>미션 제목<NewBadge /></S.Title>
            <S.Info><img src="https://media.discordapp.net/attachments/1359774260817563670/1437807765350387764/Timer.png?ex=69149654&is=691344d4&hm=52ddbdfc4c371625494ba9a38b4a2dccc9371745ce6e605d340db26b5c2a977c&=&format=webp&quality=lossless&width=22&height=28" alt="" />2025-05-21</S.Info>
        </S.Mission>
    )
}

const Todo = (props: {time:string; title: string;}) => {
    const date = new Date();
    const nowTime = date.getHours();
    console.log(nowTime);
    return (
        <S.Todo>
            {nowTime >= parseInt(props.time.slice(0, 2)) ? <S.Dot /> : <S.Dot active />}
            <span>{props.time}</span>
            <span>{props.title}</span>
        </S.Todo>
    )
}

const MissionList = () => {
    return (
        <S.MissionContainer>
                <S.TileTitle>오늘의 미션</S.TileTitle>
                <S.Line />
                <S.MissionList>
                    <Mission />
                    <Mission />
                    <Mission />
                    <Mission />
                    <Mission />
                    <Mission />
                    <Mission />
                    <Mission />
                    <Mission />
                    <Mission />
                    <Mission />
                    <Mission />
                    <Mission />
                    <Mission />
                </S.MissionList>
        </S.MissionContainer>
    )
}


function Body() {
    return (
        <S.Body>
            <S.Contents>
                <S.RecommendContainer>
                    <Recommend />
                    <Recommend />
                    <Recommend />
                </S.RecommendContainer>
                <MissionList />
            </S.Contents>
            <S.Sidebar>
                <S.CheeringContainer>
                    <S.Cheering>
                        <img src="https://media.discordapp.net/attachments/1359774260817563670/1437812908896813250/mingcute_fire-fill.png?ex=69149b1e&is=6913499e&hm=134bde387bd26f6c7c992eccee96d33f54e6d4588b36b5ced18fe059246f151f&=&format=webp&quality=lossless&width=110&height=126" alt="" />
                        <S.CheeringTextContainer>
                            <S.CheeringTitle>연속 학습일</S.CheeringTitle>
                            <S.CheeringMessage><span>1</span>일</S.CheeringMessage>
                        </S.CheeringTextContainer>
                    </S.Cheering>
                    <S.Cheering>
                        <img src="https://media.discordapp.net/attachments/1359774260817563670/1437812908510679171/Group_86.png?ex=69149b1e&is=6913499e&hm=e84efdc94553a22081f0bc3bfe35412f48a96471a4d392afa9b6e758f8ae749e&=&format=webp&quality=lossless&width=100&height=100" alt="" />
                        <S.CheeringTextContainer>
                            <S.CheeringTitle>상위</S.CheeringTitle>
                            <S.CheeringMessage><span>7</span>%</S.CheeringMessage>
                        </S.CheeringTextContainer>
                    </S.Cheering>
                </S.CheeringContainer>
                <S.Calendar>
                    <S.CalendarConatiner>
                        <S.DateContainer>
                            <S.Date>
                                2025-11-11
                            </S.Date>
                            <S.Weekday>
                                수요일
                            </S.Weekday>
                        </S.DateContainer>
                        <WeekCalendar />
                    </S.CalendarConatiner>
                    <S.CrossLine />
                    <S.TodoList>
                        <Todo time="15:00" title="업무 보고서 작성."/>
                        <Todo time="15:00" title="업무 보고서 작성."/>
                        <Todo time="15:00" title="업무 보고서 작성."/>
                        <Todo time="15:00" title="업무 보고서 작성."/>
                        <Todo time="15:00" title="업무 보고서 작성."/>
                        <Todo time="24:00" title="업무 보고서 작성."/>
                    </S.TodoList>
                </S.Calendar>
            </S.Sidebar>
        </S.Body>
    )
}

export default Body;