const Review = require("../models/ReviewModel");

// Obtener todas las reviews
exports.getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.findAll();
    res.json(reviews);
  } catch (error) {
    console.error("Error al obtener las reviews:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

// Crear una nueva review
exports.createReview = async (req, res) => {
  try {
    const newReview = await Review.create(req.body);
    res.status(201).json(newReview);
  } catch (error) {
    console.error("Error al crear una nueva review:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

