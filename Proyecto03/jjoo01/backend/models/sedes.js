'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sedes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  sedes.init({
    id: DataTypes.INTEGER,
    nombre: DataTypes.STRING,
    anio: DataTypes.INTEGER,
    paisesParticipantes: DataTypes.STRING,
    atletas: DataTypes.INTEGER,
    paisGanador: DataTypes.STRING,
    disciplinaNombre: DataTypes.STRING,

    
  }, {
    sequelize,
    modelName: 'sedes',
  });
  return sedes;
};