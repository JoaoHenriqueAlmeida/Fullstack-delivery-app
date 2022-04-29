'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) =>{
    await queryInterface.bulkInsert('products', [{
      id: 1,
      name: 'Stella Artois',
      price: 100.00,
      url_image: 'http://localhost:3001/images/stella_artois_275ml.jpg',
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('products', null, {});
  }
};
