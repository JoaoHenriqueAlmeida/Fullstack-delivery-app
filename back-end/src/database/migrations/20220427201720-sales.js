'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id',
        },
        type: Sequelize.INTEGER,
      },
      total_price: {
        allowNull: false,
        type: Sequelize.DECIMAL(9,2),
      },
      delivery_address: {
        allowNull: false,
        type: Sequelize.STRING({ length: 100 }),
      },
      delivery_number: {
        allowNull: false,
        type: Sequelize.STRING({ length: 50 }),
      },
      sale_date: { 
        allowNull: false,
        type: Sequelize.DATE,
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING({ length: 50 }),
      },
      seller_id: {
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id',
        },
        type: Sequelize.INTEGER,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('sales');
  }
};
