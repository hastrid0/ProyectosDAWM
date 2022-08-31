'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class juegos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  juegos.init({
    nombre: DataTypes.STRING,
    ciudad_sede: DataTypes.STRING,
    mascota: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'juegos',
  });
  return juegos;
};