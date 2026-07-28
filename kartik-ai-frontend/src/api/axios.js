import axios from "axios";

import { getToken } from "@/utils/storage";

const api = axios.create({
  baseURL: "http://localhost:5000/api",

  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor

api.interceptors.request.use(
  (config) => {
    const token = getToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },

  (error) => {
    return Promise.reject(error);
  },
);

// Response Interceptor

api.interceptors.response.use(
  (response) => {
    return response;
  },

  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("kartik_ai_token");

      localStorage.removeItem("kartik_ai_user");

      window.location.href = "/admin/login";
    }

    return Promise.reject(error);
  },
);

export default api;
