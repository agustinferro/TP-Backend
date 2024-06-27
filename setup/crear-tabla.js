const model = require ("../models/Model.js")


const crearTabla = async (req,res) => {
    try {
        tabla = await model.sync();
        console.log(tabla);
    }
    catch {
        console.log("error")
    }
}

module.exports = crearTabla 
