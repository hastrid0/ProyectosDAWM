'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    for (let i = 0; i <5; i++) {  
      await queryInterface.bulkInsert('Sedes', [{  
          id: 22+i,
          nombre: 'Ciudad '+i, 
          anio: 1910+i*10, 
          paisesParticipanes: 10+i,  
          atletas:i+7,
          paisGanador:'Pais '+i,
          paisAnfitrion:'Pais '+i 
      }], {});  
   } 
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
