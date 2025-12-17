import * as S from "./Login.style";
import { useEffect, useState } from "react";
import Title from "../../components/Title";
import SubmitButton from "../../components/SubmitButton";
import Social from "../../components/Social";
import Contour from "../../components/Contour";
import Input from "../../components/Input";
import * as Form from "../../components/Form.style";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { publicInstance } from "@/hooks/axiosInstance";
import { setAccessToken, setEmail, setRefreshToken, setUserId } from "@/hooks/cookies";
import { loggedInUserRedirect } from "@/hooks/authApi";
const SERVER_URL = import.meta.env.VITE_BASE_URL;

type LoginInputs = {
  email: string,
  password: string,
}

const LoginForm = () => {
  const navigate = useNavigate();

  useEffect(() => {
    loggedInUserRedirect();
  }, [])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>()

  const [error, setError] = useState("");

  const onSubmit:SubmitHandler<LoginInputs> = (data) => {
    publicInstance.post(`${SERVER_URL}/auth/signin`, {
      email: data.email,
      password: data.password
    })
    .then(function (response) {
      setAccessToken(response.data.accessToken);
      setRefreshToken(response.data.refreshToken);
      setEmail(response.data.email);
      setUserId(response.data.userId)
      navigate("/");
    })
    .catch(function (error) {
      if (error.response && error.response.status) {
        switch(error.response.status) {
          case (400):
            sessionStorage.clear();
            navigate("/verify", {
              state: data.email
            })
            break;
          case (401):
            setError("이메일 또는 비밀번호를 확인해 주십시오.");
            break;
          case (500):
            alert("서버 에러, 잠시 후 다시 시도해주세요.");
            break;
          default:
            alert(`${error.status}, 잠시 후 다시 시도해주세요.`);
            break;
        }
      } else {
          alert("네트워크 오류가 발생헀습니다. 잠시 후 다시 시도해주세요.");
      }
    });
  }


  return (
    <Form.Form onSubmit={handleSubmit(onSubmit)}>
      <Form.ElementContainer>
        <Form.FormContainer>
          <Form.InputContainer>
            <Input.Input label="이메일" placeholder="이메일을 입력하세요" {...register("email", {required: "이메일을 입력해주세요."})} />
            {errors.email ? <S.Error>{errors.email.message}</S.Error> : null}
          </Form.InputContainer>
          <Form.InputContainer>
            <Input.Input label="비밀번호" type="password" placeholder="비밀번호를 입력하세요" {...register("password", {required: "비밀번호를 입력해주세요."})} />
            {errors.password ? <S.Error>{errors.password.message}</S.Error> : null}
          </Form.InputContainer>
          {error ? <S.Error>{error}</S.Error> : null}
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