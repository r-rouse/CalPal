// routes/FoodsRouter.js
const express = require('express');
const {
  GetAllFoods,
  GetFoodById,
  CreateFood,
  UpdateFoodDetails,
  DeleteFood
} = require('../controllers/Foods');
const router = express.Router();

router.get('/', GetAllFoods);
router.get('/:id', GetFoodById);
router.post('/', CreateFood);
router.put('/:id', UpdateFoodDetails);
router.delete('/:id', DeleteFood);


module.exports = router;
