import * as S from "./Login.style";
import { useState } from "react";
import axios from "axios";
import Title from "../../components/Title";
import SubmitButton from "../../components/SubmitButton";
import Social from "../../components/Social";
import Contour from "../../components/Contour";
import Input from "../../components/Input";
import * as Form from "../../components/Form.style";
import { UserApi } from "@/hooks/Auth/AuthAPI";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Link } from "react-router";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

type LoginInputs = {
  email: string,
  password: string,
}

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>()

  const [error, setError] = useState("");

  const onSubmit:SubmitHandler<LoginInputs> = (data) => {
    UserApi.post(`${SERVER_URL}/auth/signin`, {
      email: data.email,
      password: data.password
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      if (error.status === 401) {
        setError("이메일 또는 비밀번호를 확인해 주십시오.")
      }
      console.log("error", error);
    });
  }

  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  return (
    <Form.Form onSubmit={handleSubmit(onSubmit)}>
      <Form.ElementContainer>
        <Form.FormContainer>
          <Form.InputContainer>
            <Input.Input label="이메일" placeholder="이메일을 입력하세요" {...register("email", {required: true, pattern: emailRegex})} />
            {errors.email?.type === "required" ? <S.Error>이메일을 입력해주세요.</S.Error> : null}
            {errors.email?.type === "pattern" ? <S.Error>유효한 이메일을 입력해주세요.</S.Error> : null}
          </Form.InputContainer>
          <Form.InputContainer>
            <Input.Input label="비밀번호" type="password" placeholder="비밀번호를 입력하세요" {...register("password", {required: true})} />
            {error ? <S.Error>{error}</S.Error> : null}
          </Form.InputContainer>
        </Form.FormContainer>
        <S.Helper>
          <Link to="/auth/register">회원가입</Link>
          <Link to="">비밀번호를 잃어버렸어요.</Link>
        </S.Helper>
      </Form.ElementContainer>
      <SubmitButton text="로그인" />
    </Form.Form>
  )
}

function Login() {
  return (
    <>
      <Title text="로그인" />
      <LoginForm />
      <Contour text="또는 다음으로 로그인" />
      <Social />
    </>
  )
}


export default Login;