const express = require('express');
const router = express.Router();
const foodController = require('../controllers/foodController');

router.get('/foods', foodController.getFoods);

router.get('/foods/:category', foodController.getFoodsByCategory);

router.post('/addfoods', foodController.addFood);
router.get("/foods/search/:name", foodController.searchFoodByName);
router.get("/foods/suggest/:letters", foodController.searchFoodByLetters);

module.exports = router;