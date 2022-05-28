const mongoose = require("mongoose");

// Database Schema for Reviews Model
const ReviewSchema = new mongoose.Schema({
  // to store the userID who made the review
  userId: {
    type: mongoose.ObjectId,
  },

  // description of the review.
  description: {
    type: String,
  },

  // to store the creation date and time of the review.
  cDate: {
    type: Date,
  },

  // to store the updated date and time of the review.
  uDate: {
    type: Date,
  },
});

module.exports = mongoose.model("review", ReviewSchema);
