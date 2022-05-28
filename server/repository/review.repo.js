const Review = require("../models/Review");

class ReviewRepo {
  constructor() {
    this.review = Review;
  }

  // Method to create a review on a blog
  async createReview(userId, blogId, description) {
    let newReview = {
      userId,
      blogId,
      description,
    };
    return await this.review.create(newReview);
  }

  // Method to update a review on a blog
  async updateReview(updates, reviewId) {
    return await this.review.findOneAndUpdate(
      { _id: reviewId },
      { $set: updates }
    );
  }
}

module.exports = ReviewRepo;
