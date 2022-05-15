import { getRandomSalt, getEncrypt } from '../util/encrypt';
import { ErrorCode, ErrTipMap } from '../constant/errCode';
import { getCookieString } from '../util/customCookie';
import userModel from '../model/user';
import { Context } from 'koa';
const redisStore = require('../util/redisStore');

export default class UserService {
    public static async register(username: string, password: string) {
        try {
            const isUserExit = await userModel.findOne({
                where: {
                    username: username,
                },
            });
            if (isUserExit) {
                return {
                    err_no: ErrorCode.AccountExist,
                    err_tips: ErrTipMap.AccountExist,
                };
            } else {
                // 获取盐值以及加密后的信息
                const salt = getRandomSalt();
                // 数据库存放的密码是由用户输入的密码加上随机盐值，而后再进行加密所获得的的炒鸡加密密码
                const encryptPassword = getEncrypt(password + salt);
                await userModel.create({
                    username,
                    password: encryptPassword,
                    salt,
                });
                return {
                    err_no: 0,
                    err_tips: '注册成功',
                };
            }
        } catch (error: any) {
            console.log(error);
            return {
                err_no: ErrorCode.UnknowError,
                err_tips: error.message || ErrTipMap.UnknowError,
            };
        }
    }
    public static async login(ctx: Context, username: string, password: string) {
        try {
            const userInfo = await userModel.findOne({
                where: {
                    username,
                },
            });
            if (userInfo) {
                const { salt, password: realPassword, id } = userInfo.dataValues;
                const encryptPassword = getEncrypt(password + salt);
                if (realPassword !== encryptPassword) {
                    return {
                        err_no: ErrorCode.InvalidPassword,
                        err_tips: ErrTipMap.InvalidPassword,
                    };
                } else {
                    const encryptSessionId = getEncrypt(password + id + getRandomSalt());
                    // createTS: 是session的创建时间
                    // maxAge: 是session的有效时间，暂定未7天
                    // expiresTS: 是session的最终过期时间（expiresTS > createTS + maxAge）,暂定为30天
                    const sessionValue = {
                        id: id,
                        username: username,
                        createTS: new Date().getTime(),
                        maxAge: 7 * 86400000,
                        expiresTS: 86400000 * 30,
                    };
                    redisStore.set(encryptSessionId, sessionValue, 40 * 86400000);
                    const customCookie = getCookieString({
                        key: 'koa.sess',
                        value: encryptSessionId,
                        maxAge: 86400000 * 10,
                        httpOnly: false,
                        signed: false,
                    });
                    ctx.set('Authorization', customCookie);
                    return {
                        err_no: 0,
                        err_tips: '登录成功',
                        data: {
                            username,
                        },
                    };
                }
            } else {
                return {
                    err_no: ErrorCode.AccountNotExist,
                    err_tips: ErrTipMap.AccountNotExist,
                };
            }
        } catch (error: any) {
            console.log(error);
            return {
                err_no: ErrorCode.UnknowError,
                err_tips: error.message || ErrTipMap.UnknowError,
            };
        }
    }
}
