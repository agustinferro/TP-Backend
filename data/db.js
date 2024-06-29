const {Sequelize} = require ("sequelize")

const db = new Sequelize("mysql://366595:cursodenode@mysql-grupo1-24127.alwaysdata.net:3306/Productos");

module.exports = db;