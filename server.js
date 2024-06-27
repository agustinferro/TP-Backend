const express = require ("express")
const app = express()
const port = 3030


//const productosRouter = require("./routes/productosRouter.js")
//const db = require ("./data/db.js")

app.use (express.json()) 



app.get ("/",(req,res)=>{
    res.send("estas en el home")
})

//app.use ("/productos",productosRouter)


/*
const conexiondb = async ()=>{
 try {
    await db.authenticate()
    console.log(`Conexion ok a la base de datos`);
 } catch (error) {
    console.log(`el error es : ${error}`)
 }
}
*/

app.listen(port,()=>{
    conexiondb()
    console.log(`Server ok en el puerto ${port}`);
})
