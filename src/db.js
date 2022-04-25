const { Sequelize } = require('sequelize');

const dbSequelize = new Sequelize(process.env.DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
    dialect: process.env.DB_DIALECT, host: process.env.DB_HOST
});

module.exports = dbSequelize