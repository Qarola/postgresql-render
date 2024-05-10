const express = require("express");
const router = express.Router();
const { getAllProducts, createProduct } = require("../controllers/productController");

// Rutas para productos
router.post("/products", createProduct);

router.get("/products", getAllProducts);

module.exports = router;
