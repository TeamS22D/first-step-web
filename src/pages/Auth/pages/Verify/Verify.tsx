import { ThemeProvider } from "styled-components"
import * as S from "./Verify.style"
import { lightTheme } from "@/theme/theme"
import { useLocation, useNavigate } from "react-router"
import WarningIcon from "@assets/Verify/warning.svg?react"
import { GlobalStyle } from "@/styles/GlobalStyle"
import { useEffect, useState } from "react"
import { publicInstance } from "@/hooks/axiosInstance"

function Verify() {
  const location = useLocation();
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const email = location.state;
  const navigate = useNavigate();


  const handleVerify = () => {
    publicInstance.get(`/mail/${email}/${code}`)
    .then(() => {
      alert("인증이 완료되었습니다.")
      window.location.replace("/");
    })
    .catch(() => {
      setError("인증번호가 일치하지 않습니다.")
    })
  }

  useEffect(() => {
    const isVisited = sessionStorage.getItem("isEmailSend")
    if (!isVisited) {
      publicInstance.post(`/mail/${email}`)
      .then((response) => {
        sessionStorage.setItem("isEmailSend", "true");
        switch (response.status) {
          case 200:
            alert("인증번호가 전송되었습니다.");
            break;
          case 201:
            alert("이미 인증된 이메일입니다.");
            break;
        }
      })
      .catch((error) => {
        if (error.response && error.response.status) {
          switch (error.response.status) {
            case 500:
              alert("인증번호 전송에 실패했습니다.");
              break;
            case 400:
              alert("존재하지 않는 이메일입니다.");
              break;
          }
        } else {
          alert("네트워크 오류가 발생헀습니다. 잠시 후 다시 시도해주세요.");
        }
        navigate("/");
      })
    } else {
      alert("이메일이 이미 전송되었습니다.")
    }
  }, [email])

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
  }

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <S.Container>
        <S.Body>
          <h1>이메일 주소 인증</h1>
          <p>
            안녕하세요. 사용자님.<br />
            첫걸음 서비스 이용을 위해 <strong>{email}</strong> 주소로 이메일 주소 인증을 요청하셨습니다.<br />
            이메일 주소 인증을 완료하신 후 아래 버튼을 클릭하면, 서비스를 이용하실 수 있습니다.
          </p>
          <S.EmailContainer>
            <S.Email type="text" onChange={handleEmail} />
            {error ? <S.Error>{error}</S.Error> : null}
            <S.DeadlineMessage>
              <WarningIcon />
              <p>인증확인은 1시간 이내 완료해주세요.</p>
            </S.DeadlineMessage>
          </S.EmailContainer>
          <S.SubmitButton onClick={handleVerify} disabled={!code}>인증완료</S.SubmitButton>
        </S.Body>
        <S.WarningContainer>
          <h5>유의사항</h5>
          <p>1. 인증 메일은 발송 시점으로부터 1시간 동안은 유효하며, 재발송 시 기존 <br /> 인증 코드는 만료됩니다. 반드시 마지막에 수신된 메일을 확인 바랍니다. <br />2. 메일이 도착하지 않았다면 스팸함을 확인해 주시기 바랍니다.</p>
        </S.WarningContainer>
      </S.Container>
    </ThemeProvider>
  )
}

export default Verify