const {Sequelize} = require ("sequelize")
const user = process.env.db_user;
const pass = process.env.db_pass;
const db = new Sequelize(`mysql://${user}:${pass}@mysql-grupo1-24127.alwaysdata.net:3306/grupo1-24127_db`);

module.exports = db;