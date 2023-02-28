const Sequelize = require("sequelize");
const sequelize = require("../config/sequelizeConnection");

let db = {
  // Core Tables
  NFTCollectionModel: require('./NFTCollectionModel')(sequelize, Sequelize.DataTypes)

  // Join Tables

}

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
})

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = { db }



