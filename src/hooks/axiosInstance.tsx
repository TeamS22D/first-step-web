import axios from "axios";
import { deleteCookie, getCookie } from "./cookies";
import { tokenRefresh } from "./authApi";


export const publicInstance = axios.create({ //로그인 등 토큰 필요 없는 경우
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

const axiosInstance = axios.create({ //axios 인스턴스 생성
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true, 
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use( //axios 인스턴스 설정
  async (config) => {
    config.withCredentials = true;
    if (config.url && (config.url.includes("/auth/login") || config.url.includes("/auth/register"))) { //로그인 & 회원가입 페이지는 토큰 검증 통과
      return config;
    }

    const accessToken = getCookie("accessToken");
    const refreshToken = getCookie("refreshToken");
    const userId = getCookie("userId")

    if(accessToken) { //토큰이 있으면 헤더에 설정
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    } else { 
      if(refreshToken && userId) {
        const newToken = await tokenRefresh(refreshToken, userId); //토큰 재발급

        if(newToken) {
          config.headers["Authorization"] = `Bearer ${newToken}`;
        }
      } else { //로그인 페이지로 이동
        deleteCookie("accessToken");
        deleteCookie("refreshToken");
        deleteCookie("email")
        deleteCookie("userId")
        window.location.replace("/auth/login");
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;