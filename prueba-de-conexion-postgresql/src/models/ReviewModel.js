const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Review = sequelize.define("review", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false, // Asegúrate de que userId no sea nulo
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false, // Asegúrate de que productId no sea nulo
    },
    calification: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    comment: {
      type: DataTypes.TEXT,
    },
  });

  return Review;
};
