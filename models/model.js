const db = require ("../data/db.js")

const {DataTypes} = require ("sequelize")

const model = db.define ("productos",{
    sku:{type:DataTypes.INTEGER},
    categoria:{type:DataTypes.TEXT},
    producto:{type:DataTypes.TEXT},
    precio: {type:DataTypes.FLOAT},
    puntaje:{type:DataTypes.INTEGER},
    puntaje:{type:DataTypes.INTEGER},
    
})

module.exports = model 