type MySqlConf = {
    mysqlName?: string; // 数据库名
    mysqlUserName?: string; // 数据库用户名
    mysqlPassword?: string; // 数据库用户密码
    mysqlIp?: string; // mysql部署的机器IP
};

const devMySqlConf: MySqlConf = {
    mysqlName: 'my_idea',
    mysqlUserName: 'root',
    mysqlPassword: 'root',
    mysqlIp: '127.0.0.1',
};

const prodMySqlConf: MySqlConf = {
    mysqlName: 'my_idea',
    mysqlUserName: 'root',
    mysqlPassword: 'root',
    mysqlIp: '127.0.0.1',
};

module.exports = {
    development: devMySqlConf,
    production: prodMySqlConf,
}[process.env.NODE_ENV || 'development'];
