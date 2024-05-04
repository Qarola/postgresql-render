const { DataTypes } = require('sequelize');
const sequelize = require('../../config');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE
  },
  updatedAt: {
    type: DataTypes.DATE
  }
});

// Sincroniza el modelo con la base de datos
sequelize.sync({ force: true }).then(() => {
  console.log('La base de datos ha sido sincronizada correctamente.');
}).catch((error) => {
  console.error('Error al sincronizar la base de datos:', error);
});

module.exports = { sequelize, User };
