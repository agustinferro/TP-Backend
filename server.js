const express = require ("express");
const app = express();
const port = process.env.PORT || 3030;


//const productosRouter = require("./routes/productosRouter.js")
const db = require ("./data/db.js")

app.use (express.json()) 


app.get ("/",(req,res)=>{
    res.send("estas en el home");
});

//app.use ("/productos",productosRouter)



const conexiondb = async ()=>{
 try {
    await db.authenticate()
    alert(`Conexion ok a la base de datos`);
 } catch (error) {
    alert(`el error es : ${error}`)
 }
}


app.listen(port,()=>{
    conexiondb()
    alert(`Server ok en el puerto ${port}`);
});
