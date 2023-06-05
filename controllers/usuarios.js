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
    msg:"Socio creado con exito",
   usuario
  });
};

const usuariosPut = (req, res) => {
  const { id } = req.params;
  res.json({
    msg: "peticion put",
    id,
  });
};

const usuariosDelete= (req, res)=> {
    res.json({
      msg: "peticion delete",
    });
  }
  module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
  }
