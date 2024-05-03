require('dotenv').config();
const { Sequelize } = require('sequelize');


const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  dialectOptions: {
    connectTimeout: 30000,
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
});

/* const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: 'postgresql-render.onrender.com',  /* process.env.DB_HOST, 
  dialect: 'postgres',
  dialectOptions: {
    connectTimeout: 30000 
  }
}); */

module.exports = sequelize;
