import { prodMySqlConf } from './security';
import { MySqlConf } from '../type';

const devMySqlConf: MySqlConf = {
    mysqlName: 'my_idea',
    mysqlUserName: 'root',
    mysqlPassword: 'root',
    mysqlIp: '127.0.0.1',
};

module.exports = {
    development: devMySqlConf,
    production: prodMySqlConf,
}[process.env.NODE_ENV || 'development'];
