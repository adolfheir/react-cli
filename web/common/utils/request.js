import axios, { CancelToken } from 'axios';
import { Message } from '@alifd/next';

const instance = axios.create();
// http request 拦截器
instance.interceptors.request.use(
  config => {
    return config;
  },
  err => {
    return Promise.reject(err);
  },
);

// http response 拦截器
instance.interceptors.response.use(
  response => {
    if (response.data.success === true) {
      return response.data.data;
    } else {
      Message.show({
        type: 'error',
        content: response.data.msg || '服务器错误',
      });
      return Promise.reject(response);
    }
  },
  // 接口错误状态处理，也就是说无响应时的处理
  error => {
    Message.show({
      type: 'error',
      content: '服务器错误',
    });
    return Promise.reject(error.response.status); // 返回接口返回的错误信息
  },
);

instance.CancelToken = CancelToken;

export default instance;
