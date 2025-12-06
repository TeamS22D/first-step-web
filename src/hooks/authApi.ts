import { deleteCookie, setAccessToken } from "./cookies";
import { publicInstance } from "./axiosInstance";

export const tokenRefresh = async (token: string, userId: string) => { //refreshToken으로 accessToken 재발급
  try {
    const response = await publicInstance.post(`/auth/refresh`, {
        userId: userId,
        refreshToken: token
    })

    const newToken = response.data.accessToken;
    setAccessToken(newToken);

    return newToken
  }
  catch { //발급 실패 시 로그인페이지로 이동
    deleteCookie("accessToken");
    deleteCookie("refreshToken");
    deleteCookie("userId")
    deleteCookie("email")
    window.location.replace("/auth/login");
    return null;
  }
}