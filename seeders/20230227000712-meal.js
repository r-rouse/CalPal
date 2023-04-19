'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'meals',[
        {
          name: 'rice and beans',
          ingredients: ['rice', 'beans'],
          createdAt: new Date(),
          updatedAt: new Date()

        }
      ]
    )
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};