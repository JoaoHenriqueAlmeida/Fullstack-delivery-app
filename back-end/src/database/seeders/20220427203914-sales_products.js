'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('sales_products',
    [
      {
        sale_id: 1,
        product_id: 1,
        quantity: 1,
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('sales_products', null, {});
  }
};
