
import axios from "axios";
import API_BASE_URL from "./api";

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true
});

api.interceptors.request.use(
  (config) => {
    console.log('Request:', config.method.toUpperCase(), config.url);
    console.log('With credentials:', config.withCredentials);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;