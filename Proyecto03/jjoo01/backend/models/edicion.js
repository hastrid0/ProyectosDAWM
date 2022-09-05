'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class edicion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  edicion.init({
    nombre: DataTypes.STRING,
    ciudad_sede: DataTypes.STRING,
    mascotas: DataTypes.STRING,
    url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'edicion',
  });
  return edicion;
};