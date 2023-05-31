
const {Router} = require ("express")
const {validarCampos} = require("../middlewares/validar-campos")
const { usuariosGet, usuariosPost, usuariosPut, usuariosDelete } = require ("../controllers/usuarios")
const router = Router()
const {check} = require("express-validator")
const {esRoleValido, emailExiste} = require("../helpers/db-validators")



router.get("/", usuariosGet );

  router.post("/",[
    check("nombre","El nombre es obligatorio").notEmpty(),
    check("password","La contraseña debe tener minimo 6 caracteres").isLength({
      min:6,
    }),
    check("email","El correo no es valido").isEmail(),
    check("email").custom(emailExiste),
    check("role").custom(esRoleValido),
    validarCampos
  ],usuariosPost );

    router.put("/:id", usuariosPut);

    router.delete("/:id",usuariosDelete);

    module.exports = router;