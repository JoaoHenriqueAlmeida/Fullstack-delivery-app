'use strict';

module.exports = {
  up: async  (queryInterface, Sequelize) => {
    await queryInterface.createTable('sales_products', {
      sale_id: {
        allowNull: false,
        // onUpdate: 'CASCADE',
        // onDelete: 'CASCADE',
        // references: {
        //   model: 'sales',
        //   key: 'id',
        // },
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      product_id: {
        allowNull: false,
        // onUpdate: 'CASCADE',
        // onDelete: 'CASCADE',
        // references: {
        //   model: 'products',
        //   key: 'id',
        // },
        // primaryKey: true,
        type: Sequelize.INTEGER,
      },
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('sales_products');
  }
};
