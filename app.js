import mongoose from "mongoose"; //conectar una base de datos
import cors from "cors"; // dar seguridad a un server
import dotenv from "dotenv"; // poder llamar lo que hay en .env
import express from  "express"; // para crear un servidr local
import { test } from "./backend/controllers/alumnos.controller.js" //se busca con un ./ y se sigue con / (slash)

dotenv.config();
mongoose.connect(process.env.urlBD) //conectar con mongodb compass
.then(()=>{
    console.log("Funciona chingon la base de datos 7u7")
})
.catch((error)=>{
    console.log("No jalo la chingadera", error)
})   //promesa de verificacion de funcionamiento

// .then sino encuentra nada funciono

const app = express(); // servidor
app.use(cors());
app.listen(4000, ()=>{
    console.log("Se escucha el servidor, no se escucha borroso")
}) // verificar si funciona el servidor 

test();