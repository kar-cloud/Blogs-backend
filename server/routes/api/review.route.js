const express = express();
const router = express.Router();

const ReviewController = require("../../controller/review.controller");
let reviewService;
const reviewController = new ReviewController(reviewService);

// @route POST /api/createReview/:blogId
// @desc to create a review on the blog
router.post("/api/createReview/:blogId", (req, res) => {
  reviewController.createReview(req, res);
});

// @route PUT /api/updateReview/:reviewId
// @desc to update a review on the blog
router.put("/api/updateReview/:reviewId", (req, res) => {
  reviewController.updateReview(req, res);
});
