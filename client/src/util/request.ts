import axios, { AxiosError, AxiosResponse } from 'axios';
import { TIMEOUT, BASE_URL } from '../config/service.config';

interface ResponseData<T = any> {
    err_no: number;
    err_tips: string;
    data: T;
}

const ErrorCodeMap: Record<number, string> = {
    400: '请求参数错误',
    403: '服务器拒绝本次访问',
    404: '请求资源未找到',
    500: '内部服务器错误',
    501: '服务器不支持该请求中使用的方法',
    502: '网关错误',
    504: '网关超时',
};

const instance = axios.create({
    withCredentials: true,
    baseURL: BASE_URL,
    timeout: TIMEOUT,
});
instance.defaults.headers.post['Content-Type'] = 'application/json';
instance.interceptors.request.use(
    config => {
        if (config.headers) {
            config.headers.Authorization = document.cookie;
        }
        return config;
    },
    err => {
        console.log(err);
        return err;
    }
);

instance.interceptors.response.use(
    res => {
        const { data } = res as AxiosResponse<ResponseData>;
        if (res.headers['authorization']) {
            document.cookie = res.headers['authorization'];
        }
        return data;
    },
    err => {
        handleError(err);
    }
);

function handleError(err: AxiosError) {
    if (err && err.response) {
        let errTips =
            err.response.status in ErrorCodeMap
                ? ErrorCodeMap[err.response.status]
                : err.response.data.message;
        console.log(errTips);
        return Promise.reject(err);
    } else {
        console.log('请求超时，请刷新重试');
        return Promise.reject('请求超时，请刷新重试');
    }
}
export default instance;
