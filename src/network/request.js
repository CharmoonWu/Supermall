import axios from "axios";

export function request(config) {
  const instance = axios.create({
    baseURL: "http://123.207.32.32:8000/api/wh",
    timeout: 5000
  });

  // axios的拦截器
  // 请求拦截的作用
  instance.interceptors.request.use(config => {
    return config;
  });
  //  响应拦截
  instance.interceptors.response.use(res => {
    return res.data;
  });
  // 发送真正的网络请求
  return instance(config);
};