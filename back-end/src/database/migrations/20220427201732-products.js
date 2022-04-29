'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('products', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING({ length: 100 }),
      },
      price: {
        allowNull: false,
        type: Sequelize.DECIMAL(4,2),
      },
      url_image: {
        allowNull: false,
        type: Sequelize.STRING({ length: 200 }),
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('products');
  }
};
