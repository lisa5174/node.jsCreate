import path from "path";
import fs from "fs";
import Sequelize from "sequelize";
import _ from "lodash"; //改

const basename = path.basename(__filename);//這裡打錯!!
const env = process.env.NODE_ENV || "development";
//const config = require(__dirname + "/../config/config.json")[env];

const sequelize = new Sequelize("node", "root", "@final0308", {
  //改
  host: "localhost",
  dialect: "mysql",
});

const db = {};

fs.readdirSync(__dirname)
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    const model = _.invoke(sequelize, "import", path.resolve(__dirname, file)); //改
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
