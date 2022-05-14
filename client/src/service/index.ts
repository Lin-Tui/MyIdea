import { request } from '../util/index';
import { UserLogin, UserRegister, UserIsLogin } from '../constant/api';
import {
    UserLoginRequest,
    UserLoginResponse,
    UserRegisterRequest,
    UserRegisterResponse,
    UserIsLoginResponse,
} from '../type/service';
export const userLogin = async (params: UserLoginRequest): Promise<UserLoginResponse> => {
    return request.post(UserLogin, params);
};

export const userRegister = async (params: UserRegisterRequest): Promise<UserRegisterResponse> => {
    return request.post(UserRegister, params);
};

export const userIsLogin = async (): Promise<UserIsLoginResponse> => {
    return request.get(UserIsLogin);
};
