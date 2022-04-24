const { Sequelize } = require('sequelize');

const dbSequelize = new Sequelize('alunos', 'root', 'mysql', {
    dialect:'mysql', host:'localhost'
});

module.exports = dbSequelize