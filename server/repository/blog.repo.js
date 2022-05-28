const Blog = require("../models/Blogs");

class BlogRepo {
  constructor() {
    this.blog = Blog;
  }

  // Method to get all the blogs from the database.
  async getAllBlogs() {
    return await this.blog.find();
  }

  // Method to get blog by Id.
  async getBlogById(blogId) {
    return await this.blog.findOne({ _id: blogId });
  }

  // Method to create a blog
  async createBlog(title, body) {
    let newBlog = {
      title,
      body,
    };
    return this.blog.create(newBlog);
  }

  // Method to update a blog
  async updateBlog(updates, blogId) {
    console.log({ updates }, blogId);
    await this.blog.findOneAndUpdate({ _id: blogId }, { $set: updates });
    return await this.blog.findOne({ _id: blogId });
  }

  // Method to delete a blog
  async deleteBlog(blogId) {
    return await this.blog.deleteOne({ _id: blogId });
  }
}

module.exports = BlogRepo;
