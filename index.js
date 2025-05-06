import express from "express" //Importar Express
import dotenv from "dotenv" //Importar Dotenv
import fs from"node:fs" 

dotenv.config() //Ejecutar dotenv
const app = express() //Crear una instancia de express

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log("Server is running on port: http://localhost:"+PORT); //Iniiciar el servidor en el puerto
})

//MANEJO DE RUTAS