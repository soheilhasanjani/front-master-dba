import axios from "axios";
import { HOST_ADDRESS } from "@/configs/baseUrl";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
  baseURL: HOST_ADDRESS,
  headers: { "Content-Type": "application/json" },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    const TOKEN = Cookies.get("TOKEN");
    if (TOKEN) {
      config.headers["Authorization"] = `Bearer ${TOKEN}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosInstance;
