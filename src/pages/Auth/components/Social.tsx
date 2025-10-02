import styled from "styled-components";

import NaverIcon from "/assets/Auth/Login/Social/Naver.png"; 
import KakaoIcon from "/assets/Auth/Login/Social/Kakao.png"; 
import GoogleIcon from "/assets/Auth/Login/Social/Google.png";

const SocialLogin = styled.div`
    display: flex;
    justify-content: center;
    gap: 60px;
    width: 440px;
    height: 64px;
`;

const SocialIcon = styled.a<{img?: string}>`
    width: 64px;
    border-radius: 32px;
    background-image: url(${(props) => props.img});
    background-size: cover;
`;

function Social() {
    return (
        <SocialLogin>
            <SocialIcon img={NaverIcon}/>
            <SocialIcon img={GoogleIcon}/>
            <SocialIcon img={KakaoIcon}/>
        </SocialLogin>
    )
}

export default Social;