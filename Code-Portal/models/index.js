const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');
const base = path.basename(__filename);

let db = {};

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    operatorsAliases: false,
    logging: false,
    define: {
      underscored: false,
      charset: 'utf8',
      timestamps: true
    },
    pool: {
      max: 5,
      min: 1,
      acquire: 30000,
      idle: 10000
    }
  }
);

fs.readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 && file !== base && file.slice(-3) ===  '.js'
    );
  })
  .forEach(file => {
    let model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;