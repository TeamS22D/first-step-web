import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true, 
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwiaWQiOjgsImlhdCI6MTc2NDUwMTg5MX0.lhr8DsqdXfU13bJaEV595bpd9s2x02pdXg9ZIsDoQsU`,
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    config.withCredentials = true;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;