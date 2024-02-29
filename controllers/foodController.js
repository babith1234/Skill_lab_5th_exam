const Food = require("../models/fooItem");

exports.getFoods = async (req, res) => {
  try {
    const foods = await Food.find();
    res.json(foods);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getFoodsByCategory = async (req, res) => {
  const { category } = req.params;
  try {
    const foods = await Food.find({ category });
    res.json(foods);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.addFood = async (req, res) => {
  try {
    const { food_name, food_description, food_price, image, category } =
      req.body;

    const newFood = new Food({
      food_name,
      food_description,
      food_price,
      image,
      category,
    });

    
    await newFood.save();

    res.status(201).json({ message: "Food added successfully", food: newFood });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.searchFoodByName = async (req, res) => {
  const { name } = req.params;

  try {
    
    const regex = new RegExp(name, "i");

    const foods = await Food.find({ name: regex });

    if (!foods || foods.length === 0) {
      return res.status(404).json({ error: "No matching foods found" });
    }

    res.json(foods);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.searchFoodByLetters = async (req, res) => {
  const { letters } = req.params;

  try {
    const foods = await Food.find({
      name: { $regex: new RegExp(`^${letters}`, "i") },
    });

    if (!foods || foods.length === 0) {
      return res.status(404).json({ error: "No matching foods found" });
    }

    res.json(foods);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
