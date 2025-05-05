import express from "express" //Importar Express

const app = express() //Crear una instancia de express

const PORT =3001 //Definir el puerto

app.listen(PORT,()=>{
    console.log("Server is running on port: http://localhost:"+PORT); //Iniiciar el servidor en el puerto
})
