import axios from "axios";

import { message } from "antd";

const service = axios.create({
  baseURL: `http://192.168.1.109:3000`,
});

service.interceptors.response.use((res) => {
  if (res.data.code === 200) {
    return res.data.data;
  } else {
    // 全局处理错误
    console.log("错误");
    message.error(res.data.errMsg);
  }
});

export const addHomeList = (data) => {
  return service.post(`/admin/api/rest/home`, data);
};
