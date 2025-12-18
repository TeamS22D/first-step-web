import * as S from "./Sidebar.style"
import Logo from "@/assets/Sidebar/Logo.png"
import Home from "@/assets/Sidebar/icons/Home.svg?react"
import Mission from "@/assets/Sidebar/icons/Mission.svg?react"
import Dict from "@/assets/Sidebar/icons/Dictionary.svg?react"
import Feedback from "@/assets/Sidebar/icons/Feedback.svg?react"
import Profile from "@/assets/Sidebar/icons/Profile.svg?react"
import * as Text from "@components/Text/Text.style"
import { useLocation } from "react-router"
import type { FunctionComponent, SVGProps } from "react"

interface IconProps {
    src: string | FunctionComponent<SVGProps<SVGSVGElement>>;
    alt: string;
    to: string;
    isLogo?: boolean;
    text?: string;
}

const Icon = ({src, alt, to, isLogo, text}:IconProps) => {
    const location = useLocation();
    const selected = location.pathname.includes(to);
    const SvgIcon = src as FunctionComponent<SVGProps<SVGSVGElement>>;

    return (
        <S.StyledLink to={to} $isSelected={selected}>
            {isLogo ? (
                <S.Logo src={src as string} alt={alt} />
            ) : (
                (() => {
                    return <SvgIcon />;
                })()
            )}
            {text ? <Text.Label>{text}</Text.Label> : null}
        </S.StyledLink>
    )
}

function Sidebar() {
    return (
        <S.SidebarConatiner>
            <Icon src={Logo} alt="로고" to="/" isLogo/>
            <S.MenuContainer>
                <Icon src={Home} alt="홈 페이지" to="/home" text="홈"/>
                <Icon src={Mission} alt="미션 페이지" to="/mission" text="미션"/>
                <Icon src={Dict} alt="용어 사전 페이지" to="dict" text="용어 사전"/>
                <Icon src={Feedback} alt="미션 피드백 페이지" to="feedback" text="미션 피드백"/>
            </S.MenuContainer>
            <Icon src={Profile} alt="프로필 페이지" to="profile" text="프로필"/>
        </S.SidebarConatiner>
    )
}

export default Sidebar;