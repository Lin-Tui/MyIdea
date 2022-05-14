export enum ErrorCode {
    // user相关
    AccountExist = 10001,
    AccountNotExist = 10002,
    InvalidPassword = 10003,
    NotLoginIn = 10004,
    RepeatLogin = 10005,
    UnknowError = 90000,
}

export const ErrTipMap = {
    AccountExist: '账号不存在',
    AccountNotExist: '账号已存在',
    InvalidPassword: '密码错误',
    NotLoginIn: '请重试登录',
    UnknowError: '系统错误，请重试',
    RepeatLogin: '当前已登录，无需重复登录',
};
