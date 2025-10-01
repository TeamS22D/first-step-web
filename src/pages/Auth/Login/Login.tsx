import * as S from "./Login.style";
import NaverIcon from "/assets/Auth/Login/Social/Naver.png"; 
import KakaoIcon from "/assets/Auth/Login/Social/Kakao.png"; 
import GoogleIcon from "/assets/Auth/Login/Social/Google.png"
import { useState } from "react";
import axios from "axios";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        axios.post('/loginEndPoint', {
            email: email,
            password: password
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handlePWChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    return (
        <S.Form onSubmit={handleLogin}>
            <S.ElementContainer>
                <S.FormContainer>
                    <S.InputContainer>
                        <S.Label>이메일</S.Label>
                        <S.InputBox><S.Input placeholder="이메일을 입력하세요." type="email" required onChange={handleEmailChange}/></S.InputBox>
                    </S.InputContainer>
                    <S.InputContainer>
                        <S.Label>비밀번호</S.Label>
                        <S.InputBox><S.Input placeholder="비밀번호를 입력하세요." type="password" required onChange={handlePWChange}/></S.InputBox>
                    </S.InputContainer>
                </S.FormContainer>
                <S.Helper>
                    <span>회원가입</span>
                    <span>비밀번호를 잃어버렸어요.</span>
                </S.Helper>
            </S.ElementContainer>
            <S.SubmitButton type="submit">로그인</S.SubmitButton>
        </S.Form>
    )
}

const SocialLogin = () => {
    return (
        <S.SocialLogin>
            <S.SocialIcon img={NaverIcon}/>
            <S.SocialIcon img={GoogleIcon}/>
            <S.SocialIcon img={KakaoIcon}/>
        </S.SocialLogin>
    )
}


function Login() {
    return (
        <S.Container>
            <S.Body>
                <S.Title>로그인</S.Title>
                <LoginForm />
                <S.Contour>
                    <div />
                    <span>또는 다음으로 로그인</span>
                    <div />
                </S.Contour>
                <SocialLogin />
            </S.Body>
            <S.Image />
        </S.Container>
    )
}


export default Login;