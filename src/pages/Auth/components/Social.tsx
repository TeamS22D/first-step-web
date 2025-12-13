import styled from "styled-components";

import NaverIcon from "/assets/Auth/Login/Social/Naver.png"; 
import KakaoIcon from "/assets/Auth/Login/Social/Kakao.png"; 
import GoogleIcon from "/assets/Auth/Login/Social/Google.png";

const SocialLogin = styled.div`
    display: flex;
    justify-content: center;
    gap: 60px;
    width: 100%;
    height: 64px;
    @media (max-width: 425px) {
        gap: 32px;
    }
`;

const SocialIcon = styled.a<{img?: string}>`
    width: 64px;
    border-radius: 32px;
    background-image: url(${(props) => props.img});
    background-size: cover;

    @media (max-width: 425px) {
        width: 48px;
        height: 48px;
    }
`;

const onSocialClick = (platform: string) => {
    window.location.replace(`${import.meta.env.VITE_BASE_URL}/auth/${platform}`);
}

function Social() {
    return (
        <SocialLogin>
            <SocialIcon img={NaverIcon} onClick={() => {onSocialClick('naver')}}/>
            <SocialIcon img={GoogleIcon} onClick={() => (onSocialClick('google'))}/>
            <SocialIcon img={KakaoIcon} onClick={() => {onSocialClick('kakao')}}/>
        </SocialLogin>
    )
}

export default Social;