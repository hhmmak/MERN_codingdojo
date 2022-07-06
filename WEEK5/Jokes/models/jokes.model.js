const mongoose = require('mongoose');

const JokesSchema = new mongoose.Schema({
    setup: {
      type: String,
      required: [true, "Name is required"],
      minlength: [3, "Setup must be at least 6 characters long"]
    },
    punchline: {
      type: String,
      required: [true, "Name is required"],
      minlength: [3, "Punchline must be at least 6 characters long"]
    },
  },
  {timestamps: true} //set up and auto-manage createdAt and updatedAt
);

const Jokes = mongoose.model('Jokes', JokesSchema);

module.exports = Jokes;