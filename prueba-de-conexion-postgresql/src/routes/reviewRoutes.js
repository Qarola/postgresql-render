// reviewRoutes.js
const express = require("express");
const router = express.Router();
const reviewController = require("../controllers/reviewController");

// Rutas para reviews
router.get("/reviews", reviewController);
router.post("/reviews", reviewController);

module.exports = router;
