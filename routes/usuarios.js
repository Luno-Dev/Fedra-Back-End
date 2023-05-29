
const {Router} = require ("express")
const { usuariosGet, usuariosPost, usuariosPut, usuariosDelete } = require ("../controllers/usuarios")
const router = Router()
const {check} = require("express-validator")


router.get("/", usuariosGet );

  router.post("/",[
    check("email","El correo no es valido").isEmail(),
    check("nombre","El nombre es obligatorio").notEmpty(),
    check("password","La contraseña debe tener minimo 6 caracteres").isLength({
      min:6,
    }),
  ],usuariosPost );

    router.put("/:id", usuariosPut);

    router.delete("/:id",usuariosDelete);

    module.exports = router;