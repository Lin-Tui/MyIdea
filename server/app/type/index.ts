export type RedisConf = {
    host?: string; // 数据库名
    port?: string; // 数据库用户名
};

export type MySqlConf = {
    mysqlName?: string; // 数据库名
    mysqlUserName?: string; // 数据库用户名
    mysqlPassword?: string; // 数据库用户密码
    mysqlIp?: string; // mysql部署的机器IP
};
