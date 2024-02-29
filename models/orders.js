const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user_Id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  food_Id: {
    type: String,
    required: true,
  },
  paymentMode: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  order_Id: {
    type: String,
    unique: true,
    required: true,
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  imageLink: String,

  fileData: String,
  created_At: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    default: "pending",
  },
  updated_At: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.model("order", orderSchema);

module.exports = Order;
