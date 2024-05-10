const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// Rutas para productos
router.get("/products", productController);
router.post("/products", productController);

module.exports = router;
