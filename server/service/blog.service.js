class BlogService {
  constructor(blogRepo) {
    this.blogRepo = blogRepo;
  }

  /**
   * Service method to get all blogs
   */
  async getAllBlogs() {
    return await this.blogRepo.getAllBlogs();
  }

  /**
   * Service method to get blog by id.
   * @param blogId
   */
  async getBlogById(blogId) {
    return await this.blogRepo.getBlogById(blogId);
  }

  /**
   * Service method to create a blog
   * @param title
   * @param body
   */
  async createBlog(title, body) {
    return await this.blogRepo.createBlog(title, body);
  }

  /**
   * Service method to update a blog
   * @param updates
   * @param blogId
   */
  async updateBlog(updates, blogId) {
    return await this.blogRepo.updateBlog(updates, blogId);
  }

  /**
   * Service method to delete a blog
   * @param blogId
   */
  async deleteBlog(blogId) {
    return await this.blogRepo.deleteBlog(blogId);
  }
}

module.exports = BlogService;
