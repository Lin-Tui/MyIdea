const Sequelize = require('sequelize');
const mysqlConfig = require('./mysqlBase');
const sequelize = new Sequelize(
    mysqlConfig.mysqlName,
    mysqlConfig.mysqlUserName,
    mysqlConfig.mysqlPassword,
    {
        host: mysqlConfig.mysqlIp,
        dialect: 'mysql',
        define: {
            timestamps: false,
        },
    }
);
module.exports = sequelize;
