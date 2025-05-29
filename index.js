import app from "./app.js" //Importar la aplicación Express desde app.js;
import connectToMongoDB from "./db.js"

const PORT = process.env.PORT || 3000

connectToMongoDB() //Llamar a la función para conectar a MongoDB

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

