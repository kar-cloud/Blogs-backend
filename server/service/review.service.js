class ReviewService {
  constructor(reviewRepo) {
    this.reviewRepo = reviewRepo;
  }

  /**
   * Service function to create a review on a blog.
   * @param userId
   * @param blogId
   * @param description
   */
  async createReview(userId, blogId, description) {
    return await this.reviewRepo.createReview(userId, blogId, description);
  }

  /**
   * Service function to update a review on a blog.
   * @param reviewId
   */
  async deleteReview(reviewId) {
    return await this.reviewRepo.deleteReview(reviewId);
  }
}

module.exports = ReviewService;
