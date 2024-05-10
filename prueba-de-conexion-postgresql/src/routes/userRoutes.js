const express = require('express');
const { register, login, findUserById } = require('../controllers/userController');

const router = express.Router();

// Ruta para registro de usuario
router.post('/register', register);

// Ruta para login de usuario
router.post('/login', login);

//Ruta para buscar un usuario po id
router.post('/:id', findUserById)


// Rutas para usuarios
router.get("/users", userController.getAllUsers);
router.post("/users", userController.createUser);


module.exports = router;
