const { Router } = require("express");
const { validarCampos } = require("../middlewares/validar-campos");
const {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosDelete,
} = require("../controllers/usuarios");
const { check } = require("express-validator");
const {
  esRoleValido,
  emailExiste,
  existeUsuarioporId,
} = require("../helpers/db-validators");
const validarJWT = require("../middlewares/validar-jwt");
const { esAdminRole } = require("../middlewares/validar-role");
const router = Router();

router.get("/",[
  validarJWT,
  esAdminRole,
  validarCampos
] ,usuariosGet);

router.post(
  "/",
  [
    check("nombre", "El nombre es obligatorio").notEmpty(),
    check("password", "La contraseña debe tener minimo 6 caracteres").isLength({
      min: 6,
    }),
    check("email", "El correo no es valido").isEmail(),
    check("email").custom(emailExiste),
    check("role").custom(esRoleValido),
    validarCampos,
  ],
  usuariosPost
);

router.put(
  "/:id",
  [
    validarJWT,
    check("id", "No es un id de mongo valido").isMongoId(),
    check("id").custom(existeUsuarioporId),

    validarCampos,
  ],
  usuariosPut
);

router.delete(
  "/:id",
  [
    
    validarJWT,
    esAdminRole,
    check("id", "No es un id de mongo valido").isMongoId(),
    check("id").custom(existeUsuarioporId),

    validarCampos,
  ],
  usuariosDelete
);

module.exports = router;
