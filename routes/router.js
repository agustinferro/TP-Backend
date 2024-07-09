const express = require("express");
const router = express.Router();

const {traerUnProducto,traerProductos, crearProducto,actualizarProducto,borrarProducto} = require("../controllers/controller.js")

router.get ("/",traerProductos)
router.get ("/:id",traerUnProducto)
router.post ("/",crearProducto)
router.put ("/:id",actualizarProducto)
router.delete ("/:id",borrarProducto)

module.exports = router
