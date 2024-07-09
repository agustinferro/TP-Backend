const express = require ("express");
const cors = require("cors");
const app = express();

app.use(cors());
const port = process.env.PORT || 3030;

const productosRouter = require("./routes/router.js");


app.use (express.json());


app.get ("/",(req,res)=>{
    res.send(`<p>- GET Todos los registros: grupo1-24127.alwaysdata.net/productos/</p>
        <p>- GET 1 Registro: grupo1-24127.alwaysdata.net/productos/id}</p>
        <p>- POST: grupo1-24127.alwaysdata.net/productos/</p>
        <p>- DELETE: grupo1-24127.alwaysdata.net/productos/id</p>
        <p>- PUT: grupo1-24127.alwaysdata.net/productos/id</p>
        <p>Formato de JSON para POST/PUT : </p>
        <p>{"categoria":"prueba11","producto":"prueba11","precio":1000.99,"puntaje":4,"stock":600}</p>`);
});

app.use ("/productos",productosRouter);


app.listen(port,()=>{
    console.log(`Server ok en el puerto ${port}`);

});
