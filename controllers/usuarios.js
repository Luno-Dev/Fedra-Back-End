const bcrypt = require('bcryptjs');

const Usuario = require ("../models/usuario")

const usuariosGet = (req, res) => {
  res.json({
    msg: "peticion get -rutas",
  });
};

const usuariosPost = async (req, res) => {
  
 

  const {nombre,email,tel,direccion,password,role} =req.body

    const usuario = new Usuario({nombre,tel,direccion,email,password,role});

     

    const salt = bcrypt.genSaltSync();
    usuario.password = bcrypt.hashSync(password, salt);

    await usuario.save();
  res.status(201).json({
    msg:"Usuario creado con exito",
   usuario
  });
};

const usuariosPut = async (req, res) => {
  const { id } = req.params;
  const {_id,password, email,...resto} = req.body;

  //encriptar la contraseña
  if(password){
    const salt = bcrypt.genSaltSync();
    resto.password = bcrypt.hashSync(password, salt);
  }
  const usuario = await Usuario.findByIdAndUpdate(id,resto,{new:true})

  res.json({
    msg: "Usuario Actualizado",
    usuario,
  });
};

const usuariosDelete= async (req, res)=> {
  const { id } = req.params;
  const usuarioBorrado = await Usuario.findByIdAndUpdate(id,{estado:false},{new:true})
    res.json({
      msg: "Usuario dado de baja  correctamente",
      usuarioBorrado
    });
  }
  module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
  }
