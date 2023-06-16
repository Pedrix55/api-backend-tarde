const { Sequelize, DataTypes } = require("sequelize");
const db = require("./db");

const Atividade = require("./atividadeModel");
const Anotacao = require("./blocoDeNotas/anotacoesModel")

const Usuario = db.define(
  "usuario",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    senha: {
      type: DataTypes.STRING,
    },
    data_cadastro: {
      type: DataTypes.DATEONLY,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "usuario",
  }
);

Usuario.hasMany(Atividade, { as: "atividades", foreignKey: "usuario_id" });
Atividade.belongsTo(Usuario, {
  as: "usuario",
  foreignKey: "usuario_id",
});
Usuario.hasMany(Anotacao, { as: "anotacoes", foreignKey: "usuario_id" });
Anotacao.belongsTo(Usuario, {
  as: "usuario",
  foreignKey: "usuario_id",
});


module.exports = Usuario;
