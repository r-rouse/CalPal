'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'foods',[
        {
          name: 'potato',
          caloriesPerGram: .74,
          sugar: .003,
          protein: .02,
          carbs: .15,
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