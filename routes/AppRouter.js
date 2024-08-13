// routes/AppRouter.js
const express = require('express');
const FoodssRouter = require('./FoodsRouter');
const UserRouter = require('./UserRouter')
const router = express.Router();

router.use('/foods', FoodssRouter);
router.use('/users', UserRouter);

module.exports = router;
