import express from "express" //Importar Express

const router = express.Router() //Creo una instacia de express.Router()

router.get("/",(req,res)=>{
    res.send("Esta es la ruta para los usuarios")
})

router.get("/about",(req,res)=>{
    res.send("Esta es la ruta de about")
})

export default router