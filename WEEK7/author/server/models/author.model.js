const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    minlength: [3, "Name must have at least 3 characters"]
  }
  },
  {timestamps: true}
);

const Author = mongoose.model('product', AuthorSchema)
module.exports = Author;