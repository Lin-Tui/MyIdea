type NodeEnv = {
    mysqlName?: string; // 数据库名
    mysqlUserName?: string; // 数据库用户名
    mysqlPassword?: string; // 数据库用户密码
    mysqlIp?: string; // mysql部署的机器IP
};

const development: NodeEnv = {
    mysqlName: 'my_idea',
    mysqlUserName: 'root',
    mysqlPassword: 'root',
    mysqlIp: '127.0.0.1',
};

const production: NodeEnv = {
    mysqlName: 'my_idea',
    mysqlUserName: 'root',
    mysqlPassword: 'root',
    mysqlIp: '127.0.0.1',
};

module.exports = {
    development: development,
    production: production,
}[process.env.NODE_ENV || 'development'];
