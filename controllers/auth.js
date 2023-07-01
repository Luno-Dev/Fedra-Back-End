const Usuario = require ("../models/usuario")
const bcrypt = require("bcryptjs")
const {generarJWT} = require("../helpers/generar-jwt")
const { default: Cookies } = require("universal-cookie")

const loginAdmin = async (req,res)=>{
    const {email,password} = req.body
try {
    // verificar si el email existe
    const usuario = await  Usuario.findOne({email})
    if(!usuario){
        return res.status(400).json({
            msg:"El email o la constraseña son incorrectos"
        })
    }

     // verificar si el usuario esta activo
if(!usuario.estado){
    return res.status(400).json({
        msg:"El usuario esta suspendido"
    })
}
      // verificar la contraseña
const  validaPassword = bcrypt.compareSync(password,usuario.password)
if(!validaPassword){
    return res.status(400).json({
        msg:"El email o la constraseña son incorrectos"
    })
}
       // generar un token
       const token = await generarJWT(usuario.id)
    const cookie = new Cookies();
    
    const data= cookie("token", token, {expires:4})
 
    res.json({
        usuario,
        token,
        data
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

    loginAdmin
}