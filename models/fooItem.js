const mongoose = require("mongoose");

const foodItemSchema = new mongoose.Schema({
  food_name: String,
  food_description: String,
  food_price: Number,
  image: String,
  category: { type: String, enum: ["veg", "non-veg", "desert"] },
});

const FoodItem = mongoose.model("foods", foodItemSchema);

module.exports = FoodItem;