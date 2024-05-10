const app = require("./src/app");
const { conn, User, Product, Review } = require("./modelsConfig/db");

// Sincronizar los modelos y crear datos de ejemplo
conn
  .sync({ force: true })
  .then(() => {
    console.log("Modelos sincronizados correctamente");

    // Crear datos de ejemplo
    return Promise.all([
      Product.create({
        name: "Producto 1",
        description: "Descripción del producto 1",
        price: 10.99,
        stock: 10,
      }),
      User.create({
        username: "Usuario 1",
        email: "usuario1@example.com",
        password: "contraseña1",
      }),
    ]).then(([user, product]) => {
      return Review.create({
        userId: 1, // Aquí debes proporcionar el ID del usuario
        productId: 1, // Aquí debes proporcionar el ID del producto
        calification: 4,
        comment: "Excelente producto",
      });
    });
  })
  .then(() => {
    console.log("Datos de ejemplo creados");
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error al sincronizar los modelos:", err);
  });
