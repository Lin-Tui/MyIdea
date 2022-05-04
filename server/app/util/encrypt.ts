import crypto from 'crypto';

// 获取随机盐值，例如 c6ab1 这样子的字符串
export const getRandomSalt = () => {
    const start = Math.floor(Math.random() * 10);
    const count = start + Math.ceil(Math.random() * 10);
    return crypto.randomBytes(20).toString('hex').slice(start, count);
};

// 获取密码转换成md5以后的加密信息
export const getEncrypt = (password: any) => {
    return crypto.createHash('md5').update(password).digest('hex');
};
