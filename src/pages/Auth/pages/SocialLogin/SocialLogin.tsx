import { logout } from "@/hooks/authApi";
import { setAccessToken, setEmail, setRefreshToken, setUserId } from "@/hooks/cookies";
import { GlobalStyle } from "@/styles/GlobalStyle";
import { lightTheme } from "@/theme/theme";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { ThemeProvider } from "styled-components";

function SocialLogin() {
  const [param] = useSearchParams();
  const navigate = useNavigate();

  const handleToken = () => {
    const accessToken = param.get("token");
    const refreshToken = param.get("refreshToken");
    const userId = param.get("userId");
    const email = param.get("email");
    if (accessToken && refreshToken && userId && email) {
      setAccessToken(accessToken);
      setRefreshToken(refreshToken);
      setUserId(userId);
      setEmail(email);
    } else {
      alert("로그인 중 문제가 발생하였습니다. 잠시 후 다시 시도해주세요.")
      logout();
    }
  }

  useEffect(() => {
    const handleLogin = async () => {
      await handleToken();
      navigate("/")
    }

    handleLogin();
  })
  
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <div>로그인 중입니다.</div>
    </ThemeProvider>
  )
}

export default SocialLogin;