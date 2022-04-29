'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('sales', [{
      id: 1,
      user_id: 1,
      seller_id: 2,
      total_price: 100,
      delivery_address: 'Rua das Flores',
      delivery_number: '123',
      sale_date: new Date('2020-04-27'),
      status: 'pending',

    }])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('sales', null, {});
  }
};
