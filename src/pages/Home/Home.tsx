import Body from "./Body";
import Profile from "../../components/Profile/ProfileTab";
import * as S from "./styles/Home.style";

function Home() {
    return (
        <S.Container>
            <Profile />
            <Body />
        </S.Container>
    )
}

export default Home;