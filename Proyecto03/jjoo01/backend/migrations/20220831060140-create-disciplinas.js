'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('disciplinas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      cantidad_pruebas: {
        type: Sequelize.INTEGER
      },
      maxMedallasOro: {
        type: Sequelize.INTEGER
      },
      maxMedallasPlata: {
        type: Sequelize.INTEGER
      },
      maxMedallasBronce: {
        type: Sequelize.INTEGER
      },
      sedes_nombre: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('disciplinas');
  }
};