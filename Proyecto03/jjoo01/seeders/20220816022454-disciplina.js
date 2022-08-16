'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    for (let i = 0; i <1008; i++) {  
      await queryInterface.bulkInsert('Disciplina', [{  
          nombre: 'Disciplina '+i,  
          anios: 10+i,  
          cantidad_pruebas: i+7,  
          maxMedallasOro: i+3,
          maxMedallasPlata: i+6,
          maxMedallasBronce: i+4,
          sedes_nombre: 'Sede '+i
      }], {});  
   } 
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Disciplina', null, {});  
  }
};
