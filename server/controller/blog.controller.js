class BlogController {
  constructor(blogService) {
    this.blogService = blogService;
  }

  /**
   * Method to retrieve all the blogs from the database
   * @param req
   * @param res
   */
  async getAllBlogs(req, res) {
    // return array containing all the blogs.
    res.status(200).json({
      allBlogs: await this.blogService.getAllBlogs(),
    });
  }

  /**
   * Method to retrieve a particular blog from the database
   * @param req
   * @param res
   */
  async getBlogById(req, res) {
    // Fetch the blogId from the user.
    const blogId = req.params.blogId;

    // return the particular blog data as requested b the user.
    res.status(200).json({
      blogData: await this.blogService.getBlogById(blogId),
    });
  }

  /**
   * Method to create a blog and store it in the database.
   * @param req
   * @param res
   */
  async createBlog(req, res) {
    // Fetch all the details from the user about the blog.
    const { title, body } = req.body;

    // return a message showing the user the success of creation of the blog.
    res.status(200).json({
      newBlogData: await this.blogService.createBlog(title, body),
      message: "Your blog has been created.",
    });
  }

  /**
   * Method to update the details of the blog.
   * @param req
   * @param res
   */
  async updateBlog(req, res) {
    const updates = {};

    // Fetch all the fields that will get updated for the blog.
    const entries = Object.keys(req.body);

    // Fill the updates object to be sent further.
    for (let i = 0; i < entries.length; i++) {
      update[entries[i + 1]] = Object.values(req.body)[i + 1];
    }

    // Fetch the blog Id from the user
    const blogId = req.params.blogId;

    // return a positive response after updating of the blog.
    res.status(200).json({
      updatedBlogData: await this.blogService.updateBlog(updates, blogId),
      message: "Your blog has been successfully updated.",
    });
  }

  /**
   * Method to delete a blog from the database.
   * @param req
   * @param res
   */
  async deleteBlog(req, res) {
    // Fetch the blog to be deleted from the user.
    const blogId = req.params.blogId;

    // return a message showing the user the success of deletion of the blog.
    res.status(200).json({
      deletedBlogData: await this.blogService.deleteBlog(blogId),
      message: "Your blog has been deleted.",
    });
  }
}

module.exports = BlogController;
