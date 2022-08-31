'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class disciplinas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  disciplinas.init({
    nombre: DataTypes.STRING,
    cantidad_pruebas: DataTypes.INTEGER,
    maxMedallasOro: DataTypes.INTEGER,
    maxMedallasPlata: DataTypes.INTEGER,
    maxMedallasBronce: DataTypes.INTEGER,
    sedes_nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'disciplinas',
  });
  return disciplinas;
};