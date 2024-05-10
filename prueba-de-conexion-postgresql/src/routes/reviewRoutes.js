const express = require("express");
const router = express.Router();
const { getAllReviews, createReview } = require("../controllers/reviewController");

// Rutas para reviews
router.post("/reviews", createReview);

router.get("/reviews", getAllReviews);

module.exports = router;
