// productController.js
const Product = require("../models/ProductModel");

// Obtener todos los productos
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    console.error("Error al obtener los productos:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

// Crear un nuevo producto
exports.createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    console.error("Error al crear un nuevo producto:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};
