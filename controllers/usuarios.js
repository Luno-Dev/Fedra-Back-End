const bcrypt = require('bcryptjs');
const {validationResult} = require("express-validator")
const Usuario = require ("../models/usuario")

const usuariosGet = (req, res) => {
  res.json({
    msg: "peticion get -rutas",
  });
};

const usuariosPost = async (req, res) => {
  
  const errors = validationResult(req)
  if(!errors.isEmpty()){
    return res.status(400).json(errors);
  }

  const {nombre,email,password} =req.body

    const usuario = new Usuario({nombre,email,password});

  const existeEmail = await Usuario.findOne({email})
   if(existeEmail){
    return res.status(400).json({
      msg:"El correo ya existe en la BD"
    })
   }

    const salt = bcrypt.genSaltSync();
    usuario.password = bcrypt.hashSync(password, salt);

    await usuario.save();
  res.status(201).json({
    msg:"Usuario creado con exito",
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
