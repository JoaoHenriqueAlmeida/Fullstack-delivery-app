'use strict';

module.exports = {
 up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        id: 1,
        name: 'Admin',
        email: 'adimin@admin.com',
        password: 'admin',
        role: 'administrador',
      },
      {
        id: 2,
        name: 'User',
        email: 'user@user.com.br',
        password: 'user',
        role: 'seller',
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
