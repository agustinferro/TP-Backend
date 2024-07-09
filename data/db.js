const {Sequelize} = require ("sequelize")
const user = String(process.env.DB_USER); //Las claves de la DB estan en ENV del server
const pass = String(process.env.DB_PASS);
const db = new Sequelize(`mysql://${user}:${pass}@mysql-grupo1-24127.alwaysdata.net:3306/grupo1-24127_db`);

module.exports = db;