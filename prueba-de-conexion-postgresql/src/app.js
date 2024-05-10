require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
//const authRoutes = require('./routes/user');
const { conn } = require("../modelsConfig/db");

const app = express();

app.use(bodyParser.json());

// Rutas
//app.use('/auth', authRoutes);

// Ruta de prueba para verificar el estado del servidor remoto
app.get("/health", (req, res) => {
  res.status(200).json({ message: "OK" });
});

// Conexión a la base de datos
conn
  .authenticate({
    logging: (msg) => {
      console.log("Verificando conexión:", msg);
    },
  })
  .then(() => {
    console.log(
      "Conexión a la base de datos PostgreSQL en Render es establecida correctamente."
    );
     // Sincroniza modelos si es necesario (por ejemplo, en un entorno de desarrollo)
     if (process.env.NODE_ENV !== "production") {
      conn.sync();
    }
  })
  .catch((err) => {
    console.error("Error al conectar a la base de datos:", err);
  });

module.exports = app;
