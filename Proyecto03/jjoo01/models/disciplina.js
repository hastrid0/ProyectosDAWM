'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class disciplina extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  disciplina.init({
    nombre: DataTypes.STRING,
    anios: DataTypes.INTEGER,
    cantidad_pruebas: DataTypes.INTEGER,
    maxMedallasOro: DataTypes.INTEGER,
    maxMedallasPlata: DataTypes.INTEGER,
    maxMedallasBronce: DataTypes.INTEGER,
    sedes_nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'disciplina',
  });
  return disciplina;
};