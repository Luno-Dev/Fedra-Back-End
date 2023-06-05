const { Router } = require("express");
const { loginAdmin } = require("../controllers/auth");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validar-campos");
const router = Router();



router.post(  "/loginAdmin",[
    check("email","El correo es obligatorio").isEmail(),
    check("password","El password o contraseña es obligatorio").notEmpty(),
validarCampos], loginAdmin );

module.exports = router;