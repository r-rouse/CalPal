const Router = require('express').Router();
const controller = require('../controllers/Foods');

Router.get('/', controller.GetAllFoods);
Router.get('/:id', controller.GetFoodById);
Router.put('/:id', controller.UpdateFoodDetails);
Router.delete('/:id', controller.DeleteFood);
Router.post('/', controller.CreateFood)

module.exports = Router;