import * as S from "./Sidebar.style"
import Logo from "/assets/Sidebar/Logo.png"
import Home from "/assets/Sidebar/icons/Home.png"
import Mission from "/assets/Sidebar/icons/Mission.png"
import Dict from "/assets/Sidebar/icons/Dictionary.png"
import Feedback from "/assets/Sidebar/icons/Feedback.png"
import Profile from "/assets/Sidebar/icons/Profile.png"
import { Link } from "react-router"

interface IconProps {
    src: string;
    alt: string;
    to: string;
    isLogo?: boolean;
}

const Icon = ({src, alt, to, isLogo}:IconProps) => {
    return (
        <Link to={to}>
            {isLogo? <S.Logo src={src} alt={alt}/> : <S.Icon src={src} alt={alt} />}
        </Link>
    )
}

function Sidebar() {
    return (
        <S.SidebarConatiner>
            <Icon src={Logo} alt="로고" to="/" isLogo/>
            <S.MenuContainer>
                <Icon src={Home} alt="홈 페이지" to="/"/>
                <Icon src={Mission} alt="미션 페이지" to="/mission"/>
                <Icon src={Dict} alt="용어 사전 페이지" to="dict"/>
                <Icon src={Feedback} alt="미션 피드백 페이지" to="feedback"/>
            </S.MenuContainer>
            <Icon src={Profile} alt="프로필 페이지" to="profile"/>
        </S.SidebarConatiner>
    )
}

export default Sidebar;