'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sedes', {
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
        type: Sequelize.STRING
      },
      paisesParticipanes: {
        type: Sequelize.INTEGER
      },
      atletas: {
        type: Sequelize.INTEGER
      },
      paisGanador: {
        type: Sequelize.STRING
      },
      paisAnfitrion: {
        type: Sequelize.STRING
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('sedes');
  }
};