const express = require('express');
const { register, login } = require('../controllers/user');

const router = express.Router();

// Ruta para registro de usuario
router.post('/register', register);

// Ruta para login de usuario
router.post('/login', login);

module.exports = router;
