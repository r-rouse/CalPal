// routes/AppRouter.js
const express = require('express');
const FoodssRouter = require('./FoodsRouter');
const router = express.Router();

router.use('/foods', FoodssRouter);

module.exports = router;
