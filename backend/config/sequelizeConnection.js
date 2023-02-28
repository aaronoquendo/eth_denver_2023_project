const { Sequelize } = require("sequelize");
const { isLocalEnv } = require("../util/util");

let dbName = process.env.POSTGRES_DATABASE;
let username = process.env.POSTGRES_USERNAME;
let pwd = process.env.POSTGRES_PASSWORD;
let host = process.env.POSTGRES_HOST;
let port = process.env.POSTGRES_PORT;

const sequelizeOptions = {

  logging: false,
};

if (!isLocalEnv()) {
  sequelizeOptions.dialectOptions = {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
}

const sequelize = new Sequelize(`postgres://${username}:${pwd}@${host}:${port}/${dbName}?sslmode=require`, sequelizeOptions)

const modelDefiners = [
  require("../models/NFTCollectionModel"),
  // Add more models here...
];

// We define all models according to their files.
for (const modelDefiner of modelDefiners) {
  modelDefiner(sequelize);
}

// We export the sequelize connection instance to be used around our app.
module.exports = sequelize;
