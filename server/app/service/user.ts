const Sequelize = require('sequelize');
const sequelize = require('../config/sequelizeBase');
import { getRandomSalt, getEncrypt } from '../util/encrypt';
import { ErrorCode, ErrTipMap } from '../constant/errCode';
import userModel from '../model/user';
import { Context } from 'koa';
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
                const { salt, password: realPassword } = userInfo.dataValues;
                const encryptPassword = getEncrypt(password + salt);
                if (realPassword !== encryptPassword) {
                    return {
                        err_no: ErrorCode.InvalidPassword,
                        err_tips: ErrTipMap.InvalidPassword,
                    };
                } else {
                    // TODO redis缓存 + cookie
                    console.log('console-0', ctx.session);
                    ctx.session = {
                        username: username,
                    };
                    console.log('console-2', ctx.cookies);
                    return {
                        err_no: 0,
                        err_tips: '登录成功',
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
