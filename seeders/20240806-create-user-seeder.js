'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        username: 'john_doe',
        password_hash: 'hashed_password_here', // Normally, you'd hash the password
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'jane_doe',
        password_hash: 'hashed_password_here', // Normally, you'd hash the password
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
