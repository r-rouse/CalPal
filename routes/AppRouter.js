
const Router = require('express').Router();
const FoodssRouter = require('./FoodsRouter')

Router.use('/foods', FoodssRouter);

module.exports = Router;