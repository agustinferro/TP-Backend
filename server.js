const express = require ("express");

const app = express();
const port = process.env.PORT || 3030;

const user = process.env.DB_USER;
const pass = process.env.DB_PASS;

const productosRouter = require("./routes/router.js");


app.use (express.json());


app.get ("/",(req,res)=>{
    res.send("estas en el home");
});

app.use ("/productos",productosRouter);


app.listen(port,()=>{
    console.log(`Server ok en el puerto ${port}`);

});
