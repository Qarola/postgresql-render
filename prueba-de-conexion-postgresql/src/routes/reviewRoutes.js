// reviewRoutes.js
const express = require("express");
const router = express.Router();
const reviewController = require("../controllers/reviewController");

// Rutas para reviews
router.get("/reviews", reviewController.getAllReviews);
router.post("/reviews", reviewController.createReview);

module.exports = router;
