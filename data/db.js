const {Sequelize} = require ("sequelize")

const db = new Sequelize("mysql://366595:mysql-grupo1-24127.alwaysdata.net:3306/grupo1-24127_db");

module.exports = db;