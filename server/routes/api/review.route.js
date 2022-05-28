const express = require("express");
const router = express.Router();

const ReviewController = require("../../controller/review.controller");
const { reviewService } = require("../../config/dependency");
const reviewController = new ReviewController(reviewService);

// @route POST /api/createReview/:reviewId
// @desc to create a review on the blog
router.post("/createReview/", (req, res) => {
  reviewController.createReview(req, res);
});

// @route PUT /api/deleteReview/:reviewId
// @desc to delete a review on the blog
router.delete("/deleteReview/:reviewId", (req, res) => {
  reviewController.deleteReview(req, res);
});

module.exports = router;
