const { Router } = require("express");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validar-campos");
const { loginSocio } = require("../controllers/socioauth");
const router = Router();



router.post(  "/loginsocio",[
    check("email","El correo es obligatorio").isEmail(),
    check("password","El password o contraseña es obligatorio").notEmpty(),
validarCampos], loginSocio );

module.exports = router;