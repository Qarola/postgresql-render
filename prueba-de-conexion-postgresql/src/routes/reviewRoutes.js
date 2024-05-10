const express = require("express");
const router = express.Router();
const { getAllReviews, createReview } = require("../controllers/reviewController");

// Rutas para reviews
router.get("/reviews", getAllReviews);
router.post("/reviews", createReview);

module.exports = router;
