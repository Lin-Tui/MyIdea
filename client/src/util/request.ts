import axios, { AxiosError, AxiosResponse } from 'axios';
import { TIMEOUT, BASE_URL } from '../config/service.config';

interface ResponseData<T = any> {
    err_no: number;
    err_tips: string;
    data: T;
}

const ErrorCodeMap: Record<number, string> = {
    400: '请求参数错误',
    401: '权限不足, 请重新登录',
    403: '服务器拒绝本次访问',
    404: '请求资源未找到',
    500: '内部服务器错误',
    501: '服务器不支持该请求中使用的方法',
    502: '网关错误',
    504: '网关超时',
};

const instance = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
});
instance.interceptors.request.use(
    config => {
        console.log('请求被拦截', config);
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
        if (data.err_no === 0) {
            return data;
        }
        return Promise.reject(data.err_tips);
    },
    err => {
        handleError(err);
        return Promise.reject(err);
    }
);

function handleError(err: AxiosError) {
    if (err && err.response) {
        let errTips =
            err.response.status in ErrorCodeMap
                ? ErrorCodeMap[err.response.status]
                : err.response.data.message;
        console.log(errTips);
        if (err.response.status === 401) {
            console.log('跳转到登录页');
        }
        return Promise.reject(err);
    } else {
        console.log('请求超时，请刷新重试');
        return Promise.reject('请求超时，请刷新重试');
    }
}
export default instance;
