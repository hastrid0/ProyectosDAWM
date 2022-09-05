'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('Sedes', [{  
          id: 1,
          nombre: "Sankt Moritz", 
          anio: 1928, 
          paisesParticipantes: 25,  
          atletas:464,
          paisGanador:'Noruega',
          paisAnfitrion:'Suiza',
          descripcion: 'St. Moritz o Sankt Moritz es una comuna suiza del cantón de los Grisones, situada en el distrito de Maloja, círculo de Alta Engadina en el valle de la Engadina. Tiene una población de 5029 habitantes.Es un destino vacacional popular entre la clase alta y la jet set internacional, además de una de las estaciones de esquí más caras del mundo.',
          url:'https://www.tripadvisor.co/Tourism-g188091-St_Moritz_Engadin_St_Moritz_Canton_of_Graubunden_Swiss_Alps-Vacations.html',
          createdAt:new Date(),
          updatedAt:new Date()
      }], {});  
   } 
  ,

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
