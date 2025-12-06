import Title from "../../components/Title";
import * as Form from "../../components/Form.style";
import SubmitButton from "../../components/SubmitButton";
import Input from "../../components/Input";
import { useForm, type SubmitHandler } from "react-hook-form";
import * as S from "./Register.style"
import { useCallback, useState } from "react";
import { publicInstance } from "@/hooks/axiosInstance";

type RegisterInputs = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

const RegisterForm = () => {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{7,20}$/;
  const [isEmailVerified, setIsEmailVerified] = useState(false)
  const [verifiedEmail, setVerifiedEmail] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
    watch,
    trigger,
    setValue,
  } = useForm<RegisterInputs>()

  const handleRegister: SubmitHandler<RegisterInputs> = useCallback((data) => {
    if (isEmailVerified) {
      publicInstance.post(`/user/signup`, {
        name: data.name,
        email: data.email,
        password: data.password,
        checkPassword: data.passwordConfirm,
      })
        .then(() => {
          window.location.replace("/auth/login")
        })
        .catch((error) => {
          if (error.status === 404 || error.status === 500) {
            alert("서버 에러, 잠시 후 다시 시도해주세요.")
          } else {
            alert("회원가입에 실패했습니다. 잠시 후 다시 시도해주세요.")
          }
        });
      } else {
        alert("이메일 중복 확인을 진행해주세요.")
      }
  }, [isEmailVerified]);

  const handleEmailVerify = async () => {
    const email = watch("email")
    const isValid = await trigger("email")

    if (!isValid) return;

    publicInstance.post(`/user/check-email`, {
      email: email,
    })
      .then((response) => {
        if (response.status === 200) {
          clearErrors("email");
          setIsEmailVerified(true);
          setVerifiedEmail(email);
        }
      })
      .catch((error) => {
        if (error.status === 409) {
          setError("email", {type: "custom", message: "이미 사용중인 이메일입니다."})
        } else {
          setError("email", {type: "custom", message: "이메일 확인에 실패했습니다. 잠시 후 다시 시도하세요."})
        }
      });
  }

  return (
    <Form.Form onSubmit={handleSubmit(handleRegister)}>
      <Form.ElementContainer>
        <Form.FormContainer>
          <Form.InputContainer>
            <Input.Input label="이름" type="text" placeholder="이름을 입력하세요" {...register("name", {
                required: "이 필드는 필수 입력 필드입니다.", 
                minLength: {
                  value: 2, 
                  message: "2글자 이상의 이름을 입력하세요."
                },
              })} />
            {errors.name ? <S.Error>{errors.name.message}</S.Error> : null}
          </Form.InputContainer>
          <Form.InputContainer>
            <Input.EmailInput label="이메일" type="text" placeholder="이메일을 입력하세요" {...register("email", { 
              required: "이 필드는 필수 입력 필드입니다.", 
              pattern: {
                value: emailRegex,
                message: "유효한 이메일을 입력해 주세요."
              },
              onChange(event) {
                if (!isEmailVerified) {
                  setValue("email", event.target.value);
                } else {
                  setValue("email", verifiedEmail);
                }
              },
            })} onClick={handleEmailVerify} />
            {errors.email ? <S.Error>{errors.email.message}</S.Error> : null}
            {isEmailVerified ? <S.Success>사용 가능한 이메일입니다.</S.Success> : null}
          </Form.InputContainer>
          <Form.InputContainer>
            <Input.Input label="비밀번호" type="password" placeholder="비밀번호를 입력하세요" {...register("password", { 
              required: "이 필드는 필수 입력 필드입니다.", 
              pattern: {
                value: passwordRegex,
                message: "비밀번호에는 영문, 숫자, 특수문자가 포함되어야 합니다."
              }, 
              minLength: {
                value: 7,
                message: "비밀번호는 7자 이상이어야 합니다."
              }, 
              maxLength: {
                value: 20,
                message: "비밀번호는 20자 이하여야 합니다."
              } 
            })} />
            {errors.password ? <S.Error>{errors.password.message}</S.Error> : null}
          </Form.InputContainer>
          <Form.InputContainer>
            <Input.Input label="비밀번호 확인" type="password" placeholder="비밀번호를 다시 입력하세요" {...register("passwordConfirm", { 
              required: "이 필드는 필수 입력 필드입니다.", 
              validate: (value) => value === watch("password") || "비밀번호가 일치하지 않습니다."
              })} />
            {errors.passwordConfirm ? <S.Error>{errors.passwordConfirm.message}</S.Error> : null}
          </Form.InputContainer>
        </Form.FormContainer>
      </Form.ElementContainer>
      <SubmitButton text="회원가입" />
    </Form.Form>
  )
}

function Register() {
  return (
    <>
      <Title text="회원가입" />
      <RegisterForm />
    </>
  )
}


export default Register;