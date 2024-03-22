const dbConfig = require("../config/db.Config.js");
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatatorAliases: false,
  logging: false,
});

sequelize
  .authenticate()
  .then(() => console.log("connected to db"))
  .catch(() => console.log("connection failed"));

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.employees = require("./EmployeeModel.js")(sequelize, DataTypes);

db.sequelize
  .sync({ force: false })
  .then(() => console.log("connection done"))
  .catch(() => console.log("re-sync not done"));

module.exports = db;
