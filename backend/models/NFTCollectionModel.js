const { DataTypes } = require("sequelize");

// We export a function that defines the model.
// This function will automatically receive as parameter the Sequelize connection object.
module.exports = (sequelize) => {
  sequelize.define("nftCollection", {
    // The following specification of the 'id' attribute could be omitted
    // since it is the default.
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    chain_id: {
      allowNull: true,
      type: DataTypes.INTEGER,
      unique: false,
    },
    collection_name: {
      allowNull: true,
      type: DataTypes.STRING,
      unique: false,
    },
    collection_address: {
      allowNull: true,
      type: DataTypes.STRING,
      unique: true,
    },
    name: {
      allowNull: true,
      type: DataTypes.STRING,
      unique: false,
    },
    imageUrl: {
      allowNull: true,
      type: DataTypes.STRING,
      unique: false,
    },
    bannerImageUrl: {
      allowNull: true,
      type: DataTypes.STRING,
      unique: false,
    },
    // Timestamps
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });
};
