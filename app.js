import express, { urlencoded } from "express" //Importar Express
import dotenv from "dotenv" //Importar Dotenv
import fs from "node:fs" //Importar fs
import cors from "cors" //Importar Cors
import morgan from "morgan"
import cookieParser from "cookie-parser"
import path from "node:path"
import { fileURLToPath } from "node:url"
dotenv.config() //Ejecutar dotenv
const app = express() //Crear una instancia de express

const filename = fileURLToPath(import.meta.url) //Obtener el nombre del archivo actual
const dirname = path.dirname(filename) //Obtener el directorio del archivo actual



//Middlewares
const corsOptions = {
    origin: process.env.FRONTEND_URL || "http://localhost:3000", //Permitir solicitudes desde el origen especificado en la variable de entorno FRONTEND_URL o localhost:3000
    credentials: true, //Permitir el intercambio de credenciales (cookies, encabezados de autorización, etc.)
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], //Permitir los métodos HTTP especificados
    allowHeaders: ["Content-Type", "Authorization", "set-cookie"], //Permitir los encabezados especificados
    exposedHeaders: ["set-cookie"], //Exponer los encabezados especificados al cliente
};

app.use(cors(corsOptions)) //Usar CORS con las opciones definidas

app.use(express.json()) //Analizar e cuerpo de la solicitud como JSON

app.use(urlencoded({
    extended: true //Analizar el cuerpo de la solicitud como URL codificada
}))

app.use(cookieParser()) //Analizar las cookies de la solicitud
app.use(morgan("dev")) //Registrar las solicitudes HTTP en la consola en modo desarrollo

//Configuracion de archivos estaticos
app.use(express.static(path.join(dirname, "public"))) //Servir archivos estaticos desde el directorio 'public'


//MANEJO DE RUTAS
//Leemos todos los archivos dentro del directorio './src/routes'  de forma sincrona
//fsreaddyrSync devuelve un arrray con los npmbres de todos los archivos de ese directorio

const routeFiles = fs.readdirSync('./src/routes')

//Iteramos sobre cada archivo encontrado en el directorio de rutas

routeFiles.forEach((file) => { // Verificamos si el archivo termina con '.js' para asegurarnos de que es un archivo de ruta

    import(`./src/routes/${file}`).then((route) => {
        app.use('/api/v1', route.default)
    }).catch((err) => {
        console.log(`Error al cargar la ruta ${file}:`, err);

    })
})

export default app //Exportar la instancia de Express para usarla en otros archivos, como el archivo del servidor