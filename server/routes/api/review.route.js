const express = require("express");
const router = express.Router();

const ReviewController = require("../../controller/review.controller");
const { reviewService } = require("../../config/dependency");
const reviewController = new ReviewController(reviewService);

// @route POST /api/createReview/:blogId
// @desc to create a review on the blog
router.post("/createReview/:blogId", (req, res) => {
  reviewController.createReview(req, res);
});

// @route PUT /api/updateReview/:reviewId
// @desc to update a review on the blog
router.put("/updateReview/:reviewId", (req, res) => {
  reviewController.updateReview(req, res);
});

module.exports = router;
