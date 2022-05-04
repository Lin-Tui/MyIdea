export interface UserLoginRequest {
    username: string;
    password: string;
}

export interface UserLoginResponse {
    err_no: number;
    err_tips: string;
}

export interface UserRegisterRequest {
    username: string;
    password: string;
}

export interface UserRegisterResponse {
    err_no: number;
    err_tips: string;
}
