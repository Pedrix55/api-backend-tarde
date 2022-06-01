const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('../../db');

const Produto = db.define('Produto',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING(200),
        allowNull: false,
    },
    estoque: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    descricao: {
        type: DataTypes.TEXT
    },
    imagem: {
        type: DataTypes.UUID
    }
},{
    timestamps: true,
    tableName:'produto'
});

module.exports = Produto;