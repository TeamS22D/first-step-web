import * as S from "./Login.style";
import { useState } from "react";
import axios from "axios";
import Title from "../../components/Title";
import SubmitButton from "../../components/SubmitButton";
import Social from "../../components/Social";
import Contour from "../../components/Contour";
import Input from "../../components/Input";

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
                    <Input label="이메일" type="email" placeholder="이메일을 입력하세요" onChange={handleEmailChange}/>
                    <Input label="비밀번호" type="password" placeholder="비밀번호를 입력하세요" onChange={handlePWChange}/>
                </S.FormContainer>
                <S.Helper>
                    <a>회원가입</a>
                    <a>비밀번호를 잃어버렸어요.</a>
                </S.Helper>
            </S.ElementContainer>
            <SubmitButton text="로그인"/>
        </S.Form>
    )
}

function Login() {
    return (
        <>
            <Title text="로그인"/>
            <LoginForm />
            <Contour text="또는 다음으로 로그인"/>
            <Social />
        </>
    )
}


export default Login;