const jwt = require("jsonwebtoken");
const Usuario = require("../models/usuario");

const validarJWT = async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    res.status(401).json({
      msg: "No se encuentra el token",
    });
  }
  try {
    const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);

    const usuario = await Usuario.findById(uid);

    if (!usuario) {
      return res.status(401).json({
        msg: "Token no valido",
      });
    }

    if (!usuario.estado) {
      return res.status(401).json({
        msg: "Token no valido(usuario inactivo)",
      });
    }

    req.usuario=usuario;

    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({
      msg: "Token no valido",
    });
  }
};
module.exports = validarJWT;
