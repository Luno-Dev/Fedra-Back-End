const {Router} = require("express")
const { validarCampos } = require("../middlewares/validar-campos");
const { check } = require("express-validator");
const {
    emailExisteSocio,
    existeSocioporId,
    esRoleValido
  } = require("../helpers/db-validators");
const { sociosGet, sociosPost, sociosPut, sociosDelete } = require("../controllers/socio")

const router = Router()

router.get("/", sociosGet )

router.post("/", [
    check("password", "La contraseña debe tener minimo 6 caracteres").isLength({
      min: 6,
    }),
    check("email", "El correo no es valido").isEmail(),
    check("email").custom(emailExisteSocio),
    check("role").custom(esRoleValido),
    validarCampos
], sociosPost )


router.put("/:id",[
  check("id", "No es un id de mongo valido").isMongoId(),
  check("id").custom(existeSocioporId),

  validarCampos,
],sociosPut )

router.delete("/:id", [
  check("id", "No es un id de mongo valido").isMongoId(),
  check("id").custom(existeSocioporId),

  validarCampos,
],sociosDelete )
module.exports = router