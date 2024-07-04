const model = require ("../models/model.js")



const traerProductos = async (req,res) =>{
    try {
const productos = await  model.findAll()
 res.json(productos)
    } catch (error) {
        res.json({message:error.message})
    }
}


const traerUnProducto = async (req,res) =>{
 try {
    const productos = await model.findByPk(req.params.id)
    res.json(productos)
 } catch (error) {
    res.json({message:error.message})
 }
    }

    const crearProducto = async (req,res) =>{
        try {
           await model.create(req.body)

            res.json ({"message":"Registro creado correctamente"}) 

        } catch (error) {
            res.json({message:error.message}) 
        }
    }



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