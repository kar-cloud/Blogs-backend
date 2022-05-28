class ReviewController {
  constructor(reviewService) {
    this.reviewService = reviewService;
  }

  /**
   * Method to create a review on the blog and store it in the database.
   * @param req
   * @param res
   */
  async createReview(req, res) {
    // Fetch all the details from the user about the review.
    const { userId, blogId, description } = req.body;

    // return a message showing the user the success of creation of the review.
    res.status(200).json({
      newReview: await this.reviewService.createReview(
        userId,
        blogId,
        description
      ),
      message: "Your review has been added on the blog",
    });
  }

  /**
   * Method to update the review on a blog.
   * @param req
   * @param res
   */
  async deleteReview(req, res) {
    // Fetch the details from the user.
    const reviewId = req.params.reviewId;

    // return a positive response after updating of the blog.
    res.status(200).json({
      deletedReview: await this.reviewService.deleteReview(reviewId),
      message: "Your review has been successfully deleted.",
    });
  }
}

module.exports = ReviewController;
