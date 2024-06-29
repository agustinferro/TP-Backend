const model = require ("../models/model.js")

/* CRUD
CREATE - READ - UPDATE - DELETE */

/* FUNCION QUE TRAE TODOS LOS POSTEOS
READ - GET */

const traerProductos = async (req,res) =>{
    try {
const productos = await  model.findAll()
 res.json(productos)
    } catch (error) {
        res.json({message:error.message})
    }
}

/* FUNCION QUE TRAE UN POSTEO
READ - GET */
const traerUnProducto = async (req,res) =>{
 try {
    const productos = await model.findByPk(req.params.id)
    res.json(productos)
 } catch (error) {
    res.json({message:error.message})
 }
    }

 /*    FUNCION QUE CREA UN REGISTRO
    CREATE - POST */

    const crearProducto = async (req,res) =>{
        try {
           await model.create(req.body)

            res.json ({"message":"Registro creado correctamente"}) 

        } catch (error) {
            res.json({message:error.message}) 
        }
    }

/*     FUNCION QUE ACTUALIZAR UN REGISTRO
    UPDATE - PUT */

    const actualizarProducto = async (req,res)=>{
        try {
            await model.update(req.body,{
                where: {id:req.params.id}
            })
            res.json ({"message":"Registro actualizado correctamente"}) 
        } catch (error) {
            res.json({message:error.message}) 
        }
    }

    const borrarProducto = async (req,res)=>{
        try {
            await model.destroy({
                where: {id:req.params.id} 
            })
            res.json ({"message":`se borró el registro ${req.params.id}`}) 
        } catch (error) {
            res.json({message:error.message}) 
        }
    }


    module.exports = {traerProductos,traerUnProducto, crearProducto,actualizarProducto,borrarProducto}