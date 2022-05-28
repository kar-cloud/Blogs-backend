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

  // Method to delete a review on a blog
  async deleteReview(reviewId) {
    return await this.review.deleteOne({ _id: reviewId });
  }
}

module.exports = ReviewRepo;
