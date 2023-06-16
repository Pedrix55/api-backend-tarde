const { Sequelize, DataTypes, Model } = require("sequelize");
const db = require("../../db");
const { response } = require('express');

const Perguntas= db.define(
    "perguntas",
    {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },

    question: {
        
    },

    alternative: {

    },

    response: {

    }
},
{
    timestamps: true,
    tableName:"Perguntas" 
}
);


module.exports = Perguntas;







