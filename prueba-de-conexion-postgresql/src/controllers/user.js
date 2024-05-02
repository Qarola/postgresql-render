const User = require('../models/userModel/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function register(req, res) {
  const { username, email, password } = req.body;
  try {
    const user = await User.create({ username, email, password });
    res.status(201).json({ message: 'Usuario creado correctamente', user });
  } catch (error) {
    console.error('Error al registrar el usuario:', error);
    res.status(500).json({ error: 'Error al registrar el usuario' });
  }
}

async function login(req, res) {
    const { username, password } = req.body;
    try {
      // Buscar usuario por nombre de usuario
      const user = await User.findOne({ where: { username } });
      if (!user) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }
      // Comparar contraseñas
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        return res.status(401).json({ error: 'Contraseña incorrecta' });
      }
      // Generar token de autenticación
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.status(200).json({ message: 'Login exitoso', token });
    } catch (error) {
      console.error('Error al hacer login:', error);
      res.status(500).json({ error: 'Error al hacer login' });
    }
  }
  

module.exports = { register, login };