const BlogService = require("../service/blog.service");
const BlogRepo = require("../repository/blog.repo");

const ReviewService = require("../service/review.service");
const ReviewRepo = require("../repository/review.repo");

// Creating Objects of the Blog related classes
const blogRepo = new BlogRepo();
const blogService = new BlogService(blogRepo);

// Creating objects of the Review related classes
const reviewRepo = new ReviewRepo();
const reviewService = new ReviewService(reviewRepo);

module.exports = {
  blogService,
  blogRepo,
  reviewService,
  reviewRepo,
};
