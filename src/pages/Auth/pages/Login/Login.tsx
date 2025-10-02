import * as S from "./Login.style";
import { useState } from "react";
import axios from "axios";
import Title from "../../components/Title";
import SubmitButton from "../../components/SubmitButton";
import Social from "../../components/Social";
import Contour from "../../components/Contour";
import Input from "../../components/Input";
import * as Form from "../../components/Form.style";

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
        <Form.Form onSubmit={handleLogin}>
            <Form.ElementContainer>
                <Form.FormContainer>
                    <Input.Input label="이메일" type="email" placeholder="이메일을 입력하세요" onChange={handleEmailChange}/>
                    <Input.Input label="비밀번호" type="password" placeholder="비밀번호를 입력하세요" onChange={handlePWChange}/>
                </Form.FormContainer>
                <S.Helper>
                    <a>회원가입</a>
                    <a>비밀번호를 잃어버렸어요.</a>
                </S.Helper>
            </Form.ElementContainer>
            <SubmitButton text="로그인"/>
        </Form.Form>
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