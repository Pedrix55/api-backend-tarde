const { Sequelize, DataTypes, Model } = require("sequelize");
const db = require("../db");

const Anotacao = db.define(
  "anotacao",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    titulo: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    descricao: {
      type: DataTypes.TEXT,
    },
  },
  {
    timestamps: true,
    tableName: "anotacao",
  }
);

module.exports = Anotacao;