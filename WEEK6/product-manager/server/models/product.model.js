const mongoose = require('mongoose');

const ProductManagerSchema = new mongoose.Schema({
  title: {
    type: String,
    required: ['true', "Title is required."]
  },
  price: {
    type: Number,
    required: ['true', "Price is required"],
    min: [0, "Price must be at least 0"]
  },
  description: {
    type: String
  }
  },
  {timestamps: true}
);

const Product = mongoose.model('product', ProductManagerSchema)
module.exports = Product;