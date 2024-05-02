const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/user');
const sequelize = require('./config');

const app = express();

app.use(bodyParser.json());

// Rutas
app.use('/auth', authRoutes);

// Conexión a la base de datos
sequelize.authenticate({ 
logging: (msg) => {
    console.log('Verificando conexión:', msg);
  }
})
  .then(() => {
    console.log('Conexión a la base de datos establecida correctamente.');
  })
  .catch(err => {
    console.error('Error al conectar a la base de datos:', err);
  });

module.exports = app;
