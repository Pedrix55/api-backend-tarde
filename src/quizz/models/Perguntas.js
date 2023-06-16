const { Sequelize, DataTypes, Model } = require("sequelize");
const db = require("../../db");
const { response } = require('express');

//Modelo de Questão

const Questao = db.define(
    'Questão',
    {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },

    pergunta: {
        type: DataTypes.STRING,
        allowNull: false  
    },

    descricao: {
        type: DataTypes.TEXT,
        allowNull: false
    }

},
{
    timestamps: true,
    tableName:"Questao" 
}
);

//Modelo de Materia

const Materia = db.define (
    'Materia',
{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    
    materia: {
        type: DataTypes.STRING,
        allowNull: false
    }   
},
{
    timestamps: true,
    tableName: "Materia"
}
);

//Modelo de Alternativa

const Alternativa = db.define(
    'Alternativa',
{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: false
    }
},
{
    timestamps: true,
    tableName: "Alternativa"
}
);

//Modelo de Resposta

const Resposta = db.define  (
    'Resposta', 
{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }
},
{
    timestamps: true,
    tableName: "Resposta"
}
);


// Ligando os modelos

Materia.hasMany(Questao); // Uma Materia Pertence a uma Questão
Questao.belongsTo(Materia); // Uma questão pertence a uma Materia
Questao.hasMany(Alternativa); // Uma questão tem várias Alternativa
Alternativa.belongsTo(Questao); // Uma Alternativa pertence a uma Questão
Resposta.belongsTo(Questao); // Uma resposta pertece a uma Questão
Resposta.belongsTo(Alternativa); // Uma Resposta pertence a uma Alternativa


module.exports = 
{
    Questao, 
    Materia, 
    Alternativa, 
    Resposta 
};







