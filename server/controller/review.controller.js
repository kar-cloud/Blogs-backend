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
      newBlogData: await this.blogService.createBlog(
        userId,
        blogId,
        description
      ),
      message: "Your review has been added on the blog",
    });
  }

  /**
   * Method to update the details of the blog.
   * @param req
   * @param res
   */
  async updateBlog(req, res) {
    const updates = {};

    // Fetch the details for the new description of the review.
    const { userId, blogId, newDescription } = req.body;
    updates[description] = newDescription;

    // return a positive response after updating of the blog.
    res.status(200).json({
      updatedBlogData: await this.blogService.updateBlog(
        updates,
        userId,
        blogId
      ),
      message: "Your review has been successfully updated.",
    });
  }
}

module.exports = ReviewController;
