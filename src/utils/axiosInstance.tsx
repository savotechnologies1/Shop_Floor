import axios from "axios";
const apiUrl = import.meta.env.VITE_SERVER_URL;
export const BASE_URL = "http://localhost:8080";

const axiosInstance = axios.create({
  baseURL: `${apiUrl}/api/shopFloor`,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("auth_token");

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
