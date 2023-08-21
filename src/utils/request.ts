import axios from 'axios';
import { useUserStore } from '@/store/userStore';
import { useLoadingStore } from '@/store/load';

const loadingStore = useLoadingStore();

export const request = (options: any) => {
  return new Promise((resolve, reject) => {
    const service = axios.create({
      baseURL: 'http://localhost:8090',
      timeout: 80000
    });
    // 添加请求拦截器
    service.interceptors.request.use(
      (config: any) => {
        const userStore = useUserStore();
        loadingStore.setLoading();
        if (userStore.token) {
          config.headers.token = userStore.token;
          config.headers.Authorization = userStore.token;
        }
        return config;
      },
      (error) => {
        console.log("出错啦", error);
        return Promise.reject(error);
      }
    );
    // 添加响应拦截器
    service.interceptors.response.use(
      (response: any) => {
        loadingStore.setLoading();
        return response.data;
      },
      (error) => {
        loadingStore.setLoading();
        console.log('err' + error);
        if (error.response.status === 403) {
          ElMessage.error('错了');
        } else {
          ElMessage.error('服务器请求错误，请稍后再试');
        }
        return Promise.reject(error);
      }
    );

    // 请求处理
    service(options)
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
};



export default request