import mongoose from "mongoose"; // Importa mongoose para manejar la conexión a MongoDB

const connectToMongoDB = async () => {  
    try {
        console.log("Conectando a MongoDB...")
        await mongoose.connect(process.env.MONGODB_URI, {}); // Conecta a MongoDB usando la URI definida en las variables de entorno
        console.log("Conectado a MongoDB exitosamente");
    } catch (error) {
        console.error("Error al conectar a MongoDB:", error);
        process.exit(1);
    }
};

export default connectToMongoDB;
