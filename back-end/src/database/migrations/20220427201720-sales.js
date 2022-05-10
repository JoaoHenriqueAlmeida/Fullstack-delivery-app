'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        allowNull: false,
        // field: 'user_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id',
        },
        type: Sequelize.INTEGER,
      },
      seller_id: {
        allowNull: false,
        // field: 'seller_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id',
        },
        type: Sequelize.INTEGER,
      },
      totalPrice: {
        allowNull: false,
        field: 'total_price',
        type: Sequelize.DECIMAL(9,2),
      },
      deliveryAddress: {
        allowNull: false,
        field: 'delivery_address',
        type: Sequelize.STRING({ length: 100 }),
      },
      deliveryNumber: {
        allowNull: false,
        field: 'delivery_number',
        type: Sequelize.STRING({ length: 50 }),
      },
      saleDate: { 
        allowNull: false,
        field: 'sale_date',
        type: Sequelize.DATE,
      },
      status: {
        defaultValue: 'pendente',
        type: Sequelize.STRING({ length: 50 }),
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('sales');
  }
};