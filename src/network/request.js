import axios from "axios";

export function request(config) {
  const instance = axios.create({
    baseURL: "http://106.54.54.237:8000/api/hy",
    timeout: 5000
  });

  // axios的拦截器
  // 请求拦截的作用
  instance.interceptors.request.use(config => {
    return config
  });
  //  响应拦截
  instance.interceptors.response.use((res) => {
    return res.data
  })

  // 发送真正的网络请求
  return instance(config)
}