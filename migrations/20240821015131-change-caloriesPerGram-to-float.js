module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('foods', 'caloriesPerGram', {
      type: Sequelize.FLOAT,
      allowNull: false,
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('foods', 'caloriesPerGram', {
      type: Sequelize.INTEGER,
      allowNull: false,
    });
  },
};

