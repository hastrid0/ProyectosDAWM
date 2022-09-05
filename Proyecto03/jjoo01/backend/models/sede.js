'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sede extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  sede.init({
    nombre: DataTypes.STRING,
    anio: DataTypes.INTEGER,
    paisesParticipantes: DataTypes.STRING,
    atletas: DataTypes.STRING,
    paisGanador: DataTypes.STRING,
    paisAnfitrion: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'sede',
  });
  return sede;
};