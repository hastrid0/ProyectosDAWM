'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mascota extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  mascota.init({
    nombre: DataTypes.STRING,
    imagen: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    anio: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'mascota',
  });
  return mascota;
};