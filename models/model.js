const db = require ("../data/db.js")

const {DataTypes} = require ("sequelize")

const model = db.define ("productos",{
    categoria:{type:DataTypes.TEXT},
    producto:{type:DataTypes.TEXT},
    precio: {type:DataTypes.FLOAT},
    puntaje:{type:DataTypes.INTEGER},
    stock:{type:DataTypes.INTEGER},
    
})

module.exports = model 