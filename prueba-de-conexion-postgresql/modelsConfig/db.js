require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");


const sequelize = new Sequelize(process.env.DATABASE_URL, {
  logging: false, // Si está en false, e puede habilitar esto para ver las consultas SQL en la consola
  dialectOptions: {
    ssl: {
      require: false,
      rejectUnauthorized: false,
    },
    keepAlive: true,
    charset: 'utf8',
  },
});

module.exports = sequelize;

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "../src/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(
      require(path.join(__dirname, "../src/models", file))(sequelize)
    ); // Llamamos a la función con sequelize como argumento
  });

// Injectamos la conexion (sequelize) a todos los modelos
//modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { User, Review, Product } = sequelize.models;

// Relaciones
User.hasMany(Review, { foreignKey: "userId" });
Review.belongsTo(User, { foreignKey: "userId" });

Product.hasMany(Review, { foreignKey: "productId" });
Review.belongsTo(Product, { foreignKey: "productId" });

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./modelsConfig/db');
  conn: sequelize, // para importart la conexión { conn } = require('./modelsConfig/db');
};
