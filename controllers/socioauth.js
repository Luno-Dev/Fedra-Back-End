const Socio = require("../models/socio");
const bcrypt = require("bcryptjs")
const {generarJWT} = require("../helpers/generar-jwt")

const loginSocio = async (req,res)=>{
    const {email,password} = req.body

    try {
        // verificar si el email existe
        const socio = await  Socio.findOne({email})
        if(!socio){
            return res.status(400).json({
                msg:"El email o la constraseña son incorrectos"
            })
        }
    
         // verificar si el usuario esta activo
    if(!socio.estado){
        return res.status(400).json({
            msg:"El socio esta suspendido"
        })
    }
          // verificar la contraseña
    const  validaPassword = bcrypt.compareSync(password,socio.password)
    if(!validaPassword){
        return res.status(400).json({
            msg:"El email o la constraseña son incorrectos"
        })
    }
           // generar un token
           const token = await generarJWT(socio.id)
     
        res.json({
            socio,
            token
        })
    }
        catch (error) {
            console.log(error)
            res.status(500).json({
                msg:"Comuniquese con el administrador"
            })
        }


}

module.exports = {

    loginSocio
}