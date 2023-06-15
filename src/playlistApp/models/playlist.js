const { Sequelize, DataTypes, Model } = require("sequelize");
const db = require("../../db");

const Playlist = db.define(
  "playlist",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    descricao: {
      type: DataTypes.TEXT,
    },
  },
  {
    timestamps: true,
    tableName: "playlist",
  }
);

module.exports = Playlist;
