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
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    nombre: DataTypes.STRING,
    anio: DataTypes.STRING,
    paisesParticipanes: DataTypes.INTEGER,
    atletas: DataTypes.INTEGER,
    paisGanador: DataTypes.STRING,
    paisAnfitrion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'sedes',
  });
  return sedes;
};