import axios, { type AxiosInstance, AxiosError, type InternalAxiosRequestConfig, type AxiosResponse } from "axios";

// 환경 변수 타입 단언 (필요시)
const BASE_URL = import.meta.env.VITE_SERVER_URL as string;

// 토큰 변수 초기화
const TOKEN_TYPE = localStorage.getItem("tokenType");
let ACCESS_TOKEN = localStorage.getItem("accessToken");
let REFRESH_TOKEN = localStorage.getItem("refreshToken");

// Axios 인스턴스 생성
export const UserApi: AxiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        // 값이 없을 경우 빈 문자열 또는 처리가 필요함
        'Authorization': ACCESS_TOKEN ? `${TOKEN_TYPE} ${ACCESS_TOKEN}` : '',
        'REFRESH_TOKEN': REFRESH_TOKEN ?? '',
    },
});

// 커스텀 설정을 위해 AxiosRequestConfig 확장 ( _retry 속성 추가 )
interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
    _retry?: boolean;
}

// 토큰 갱신 함수
const refreshAccessToken = async (): Promise<void> => {
    try {
        // 리프레시 요청 시에는 기존 인스턴스가 아닌 순수 axios를 쓰거나, 
        // 인터셉터가 없는 인스턴스를 쓰는 것이 무한 루프 방지에 좋습니다.
        // 여기서는 기존 UserApi를 사용하되 로직을 유지합니다.
        const response: AxiosResponse<string> = await UserApi.get(`/auth/refresh`);
        
        // 서버 응답이 { accessToken: "..." } 객체인지, 문자열 그대로인지 확인 필요
        // 원본 코드에 따라 문자열로 가정합니다.
        const newAccessToken = response.data;
        
        ACCESS_TOKEN = newAccessToken;
        localStorage.setItem('accessToken', newAccessToken);
        
        // 인스턴스 기본 헤더 업데이트
        UserApi.defaults.headers.common['Authorization'] = `${TOKEN_TYPE} ${newAccessToken}`;
    } catch (error) {
        console.error("Token refresh failed", error);
        // 리프레시 실패 시 로그아웃 처리 등을 수행 (예: 로컬스토리지 비우기, 리다이렉트)
        localStorage.clear();
        window.location.href = '/auth/login'; 
        throw error;
    }
}

// 응답 인터셉터 설정
UserApi.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    async (error: AxiosError) => {
        const originalRequest = error.config as CustomAxiosRequestConfig;

        // originalRequest가 존재하고, 403 에러이며, 재시도하지 않은 요청일 경우
        if (originalRequest && error.response?.status === 403 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                await refreshAccessToken();
                
                // 갱신된 토큰으로 헤더 교체 후 재요청
                if (ACCESS_TOKEN) {
                    originalRequest.headers['Authorization'] = `${TOKEN_TYPE} ${ACCESS_TOKEN}`;
                }
                
                return UserApi(originalRequest);
            } catch (refreshError) {
                // 토큰 갱신 실패 시 에러 반환
                return Promise.reject(refreshError);
            }
        }
        return Promise.reject(error);
    }
);