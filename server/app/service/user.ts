const Sequelize = require('sequelize');
const sequelize = require('../config/sequelizeBase');
import { getRandomSalt, getEncrypt } from '../util/encrypt';
import userModel from '../model/user';
export default class UserService {
    public static async userRegister(username: string, password: string) {
        try {
            const isUserExit = await userModel.findOne({
                where: {
                    username: username,
                },
            });
            if (isUserExit) {
                return {
                    err_no: -1,
                    err_tips: '用户已存在',
                };
            } else {
                // 获取盐值以及加密后的信息
                const salt = getRandomSalt();
                // 数据库存放的密码是由用户输入的密码加上随机盐值，而后再进行加密所获得的的炒鸡加密密码
                const encryptPassword = getEncrypt(password + salt);
                console.log('console-1', encryptPassword);
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
                err_no: -1,
                err_tips: error.message || '注册失败',
            };
        }
    }
    public static async userLogin(username: string, password: string) {
        try {
            const isUserExit = await userModel.findOne({
                where: {
                    username,
                },
            });
            if (isUserExit) {
                return {
                    err_no: -1,
                    err_tips: '用户已存在',
                };
            } else {
                await userModel.create({
                    username,
                    password,
                });
                return {
                    err_no: 0,
                    err_tips: '注册成功',
                };
            }
        } catch (error: any) {
            console.log(error);
            return {
                err_no: -1,
                err_tips: error.message || '注册失败',
            };
        }
    }
}
