const mongoose = require("mongoose");

// Database Schema for Reviews Model
const ReviewSchema = new mongoose.Schema(
  {
    // to store the userID who made the review
    userId: {
      type: mongoose.ObjectId,
      required: true,
    },

    // description of the review.
    description: {
      type: String,
      required: true,
    },

    // to store the creation date and time of the review.
    cDate: {
      type: Date,
    },

    // to store the updated date and time of the review.
    uDate: {
      type: Date,
    },

    // P.S.: This was not mentioned in the task list.
    // blog id on which review is made.
    blogId: {
      type: mongoose.ObjectId,
      required: true,
    },
  },
  { timestamps: { createdAt: "cDate", updatedAt: "uDate" } }
);

module.exports = mongoose.model("review", ReviewSchema);
