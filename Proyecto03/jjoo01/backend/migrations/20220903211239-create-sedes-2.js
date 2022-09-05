'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sedes2s', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      anio: {
        type: Sequelize.INTEGER
      },
      paisesParticipantes: {
        type: Sequelize.STRING
      },
      atletas: {
        type: Sequelize.STRING
      },
      paisGanador: {
        type: Sequelize.STRING
      },
      paisAnfitrion: {
        type: Sequelize.STRING
      },
      descripcion: {
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
    await queryInterface.dropTable('sedes2s');
  }
};