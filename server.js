const express = require ("express");
const cors = require("cors");
const app = express();

app.use(cors());
const port = process.env.PORT || 3030;

const productosRouter = require("./routes/router.js");


app.use (express.json());


app.get ("/",(req,res)=>{
    res.send(`
        - GET Todos los registros: grupo1-24127.alwaysdata.net/productos/\n
        - GET 1 Registro: grupo1-24127.alwaysdata.net/productos/id}\n
        - POST: grupo1-24127.alwaysdata.net/productos/\n
        - DELETE: grupo1-24127.alwaysdata.net/productos/id\n
        - PUT: grupo1-24127.alwaysdata.net/productos/id\n
        Formato de JSON para POST/PUT : \n
        {"categoria":"prueba11","producto":"prueba11","precio":1000.99,"puntaje":4,"stock":600}`);
});

app.use ("/productos",productosRouter);


app.listen(port,()=>{
    console.log(`Server ok en el puerto ${port}`);

});
