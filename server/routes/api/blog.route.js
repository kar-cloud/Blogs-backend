const express = require("express");
const router = express.Router();

const BlogController = require("../../controller/blog.controller");
const { blogService } = require("../../config/dependency");
const blogController = new BlogController(blogService);

// @route GET /api/getBlogs
// @desc to retrieve data of all the blogs.
router.get("/getBlogs", (req, res) => {
  blogController.getAllBlogs(req, res);
});

// @route GET /api/blog/:blogId
// @desc to retrieve data of a particular blog
router.get("/blog/:blogId", (req, res) => {
  blogController.getBlogById(req, res);
});

// @route POST /api/createBlog
// @desc to create a blog
router.post("/createBlog", (req, res) => {
  blogController.createBlog(req, res);
});

// @route PUT /api/updateBlog/:blogId
// @desc api to update a blog
router.put("/updateBlog/:blogId", (req, res) => {
  blogController.updateBlog(req, res);
});

// @route DELETE /api/deleteBlog/:blogId
// @desc api to delete a blog
router.delete("/deleteBlog/:blogId", (req, res) => {
  blogController.deleteBlog(req, res);
});

module.exports = router;
