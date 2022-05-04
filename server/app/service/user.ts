const Sequelize = require('sequelize');
const sequelize = require('../config/sequelizeBase');
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
