const db = require ("../data/db.js")

const {DataTypes} = require ("sequelize")

const model = db.define ("productos",{
    producto:{type:DataTypes.STRING},
    categoria:{type:DataTypes.STRING},
    precio: {type:DataTypes.FLOAT},
    puntaje:{type:DataTypes.INTEGER},
    descripcion:{type:DataTypes.STRING},
})

module.exports = model 