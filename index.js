import express, {urlencoded} from "express" //Importar Express
import dotenv from "dotenv" //Importar Dotenv
import fs from "node:fs" //Importar fs
import cors from "cors" //Importar Cors
import { log } from "node:console"

dotenv.config() //Ejecutar dotenv
const app = express() //Crear una instancia de express

const PORT = process.env.PORT || 3000

//Middlewares
app.use(cors({
    origin:"*", //Permitir todas las solicitudes de origen cruzado desde cualquier origen
    credentials:true //Permitir el intercambio de credenciales (cookies,encabezados de autorizacioón,etc.)
}))

app.use(express.json()) //Analizar e cuerpo de la solicitud como JSON

app.use(urlencoded({
    extended:true //Analizar el cuerpo de la solicitud como URL codificada
}))

//MANEJO DE RUTAS
//Leemos todos los archivos dentro del directorio './src/routes'  de forma sincrona
//fsreaddyrSync devuelve un arrray con los npmbres de todos los archivos de ese directorio

const routeFiles = fs.readdirSync ('./src/routes')

//Iteramos sobre cada archivo encontrado en el directorio de rutas

routeFiles.forEach((file)=>{
    
    import (`./src/routes/${file}`).then((route)=>{
        app.use('/api/v1',route.default)
    }).catch((err)=>{
        console.log(`Error al cargar la ruta ${file}:`, err);
        
    })
})

//Iniciar el servidor

const server = async () => {
    try {
        app.listen(PORT,()=>{
            console.log("Server is running on port: http://localhost:"+PORT); //Iniiciar el servidor en el puerto definido
        })
    } catch (error) {
        console.log("Error al iniciar el servidor",error);
        process.exit(1) //Salir del proceso con un codigo de error 1
    }
}

server()