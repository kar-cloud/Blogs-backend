const BlogService = require("../service/blog.service");
const BlogRepo = require("../repository/blog.repo");

const ReviewService = require("../service/review.service");
const ReviewRepo = require("../repository/review.repo");

const blogRepo = new BlogRepo();
const blogService = new BlogService(blogRepo);

const reviewRepo = new ReviewRepo();
const reviewService = new ReviewService(reviewRepo);

module.exports = {
  blogService,
  blogRepo,
  reviewService,
  reviewRepo,
};
