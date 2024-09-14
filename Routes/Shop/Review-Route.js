const {
  addProductReview,
  getProductReviews,
} = require("../../Controllers/Shop/Review-Controller");

const express = require("express");

const Review_router = express.Router();

Review_router.post("/add", addProductReview);
Review_router.get("/:productId", getProductReviews);

module.exports = Review_router;
