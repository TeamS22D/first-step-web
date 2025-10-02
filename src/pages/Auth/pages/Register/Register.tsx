import Title from "../../components/Title";
import * as Form from "../../components/Form.style";
import SubmitButton from "../../components/SubmitButton";
import Input from "../../components/Input";
import axios from "axios";
import { useState } from "react";


const RegisterForm = () => {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const handleRegister = () => {
        axios.post('/registerEndPoint', {
            username: userName,
            email: email,
            password: password,
            passwordConfirm: passwordConfirm,
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    const handleEmailVerify = () => {
        axios.post('/verifyEndPoint', {
            email: email,
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error)
        });
    }

    const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
    }
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }
    const handlePasswordConfirmChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordConfirm(e.target.value);
    }

    return (
        <Form.Form onSubmit={handleRegister}>
            <Form.ElementContainer>
                <Form.FormContainer>
                    <Input.Input label="이름" type="text" placeholder="이름을 입력하세요" onChange={handleUserNameChange}/>
                    <Input.EmailInput label="이메일" type="email" placeholder="이메일을 입력하세요" onChange={handleEmailChange} onClick={handleEmailVerify}/>
                    <Input.Input label="비밀번호" type="password" placeholder="비밀번호를 입력하세요" onChange={handlePasswordChange}/>
                    <Input.Input label="비밀번호 확인" type="password" placeholder="비밀번호를 다시 입력하세요" onChange={handlePasswordConfirmChange}/>
                </Form.FormContainer>
            </Form.ElementContainer>
            <SubmitButton text="회원가입"/>
        </Form.Form>
    )
}

function Register() {
    return (
        <>
            <Title text="회원가입"/>
            <RegisterForm />
        </>
    )
}


export default Register;