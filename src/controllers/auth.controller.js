export const home = (req,res) =>{
    res.send("Esta es la ruta para los usuarios") //Mensaje de bienvenida
}

export const about = (req,res) =>{
    res.send("Esta es la ruta de about")
}

export const getUser = (req,res) =>{
    try {
        const {username,email,edad,password} = req.body

        if (!username || !email || !edad || !password){
            return res.status(400).json({message:"Todos los datos del usuario son obligatorios"})
        }

        console.log(req.body);
       
        return res.status(200).json({
            user:{
                username,
                email,
                email,
                password
            },
            message:"Usuario obtenido correctamente"
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Error obteniendo el usuario"})
    }
}