const Sequelize = require('sequelize');
const sequelize = require('../config/sequelizeBase');
const userModel = sequelize.define(
    'user',
    {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        username: {
            type: Sequelize.STRING(255),
        },
        password: {
            type: Sequelize.STRING(255),
        },
    },
    {
        freezeTableName: true,
    }
);
export default userModel;
