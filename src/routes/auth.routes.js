import express from "express" //Importar Express
import { about, getUser, home } from "../controllers/auth.controller.js"

const router = express.Router() //Creo una instacia de express.Router()

router.get("/", home)

router.get("/about", about )

router.post ("/getUser", getUser) //Ruta para obtener el usuario

export default router