const {foods} = require('../models')


const GetAllFoods = async (req, res) => {
    try {
        const Foods = await foods.findAll();
        res.send(Foods);
    } catch (error) {
        throw error
    }
}
const GetFoodById = async (req, res) => {
    try {
      let foodId = parseInt(req.params.id);
      const food = await foods.findOne({
        where: { id: foodId }
      });
      res.send(food);
    } catch (error) {
      throw error;
    }
  };
  const CreateFood = async (req, res) => {
    try {
        let newFood = await foods.create(req.body);
        res.status(201).send(newFood);  // Use status 201 for successful creation
    } catch (error) {
        res.status(500).send({ error: 'An error occurred while creating the food item.' });
    }
};

  const UpdateFoodDetails = async (req, res) => {
    try {
      let FoodId = parseInt(req.params.id);
      let updatedFood = await foods.update(req.body, {
        where: { id: FoodId },
        returning: true
      });
      res.send(updatedFood);
    } catch (error) {
      throw error;
    }
  };
  const DeleteFood = async (req, res) => {
    try {
      let FoodId = parseInt(req.params.id);
      await foods.destroy({ where: { id: FoodId} });
      res.send(`Deleted event with an id of ${FoodId}`);
    } catch (error) {
      throw error;
    }
  };


module.exports = {
    GetAllFoods,
    CreateFood,
    GetFoodById,
    UpdateFoodDetails,
    DeleteFood

}