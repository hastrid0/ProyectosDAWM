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
    cantidadPruebas: DataTypes.INTEGER,
    descripcion: DataTypes.STRING,
    url: DataTypes.STRING,
    atletas: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'disciplina',
  });
  return disciplina;
};