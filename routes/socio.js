const {Router} = require("express")
const { validarCampos } = require("../middlewares/validar-campos");
const { check } = require("express-validator");
const {
    emailExisteSocio,
    existeSocioporId,
    esRoleValido,
    doctrabajadorExisteSocio,
    cuiltrabajadorExisteSocio,
    cuilempleadorExisteSocio
  } = require("../helpers/db-validators");
const { sociosGet, sociosPost, sociosPut, sociosDelete, obtenerSocio, sociosDeleteEmpleado, empleadosPost, socioEmpleado, EmpleadosPut, obtenerEmpleado } = require("../controllers/socio");

const { esSocioRole, esAdminRole } = require("../middlewares/validar-role");
const validarJWT = require("../middlewares/validar-jwt");

const router = Router()

router.get("/", [
  validarCampos
],sociosGet )

router.post("/", [
    check("password", "La contraseña debe tener minimo 6 caracteres").isLength({
      min: 6,
    }),
    check("email", "El correo no es valido").isEmail(),
    check("email").custom(emailExisteSocio),
    check("empleadorcuil").custom(cuilempleadorExisteSocio),
    check("role").custom(esRoleValido),
    validarCampos
], sociosPost )


router.get("/:id",[
  check("id", "No es un id de mongo valido").isMongoId(),
  validarCampos,
],obtenerSocio)

router.put("/:id",[
  check("id", "No es un id de mongo valido").isMongoId(),
  check("id").custom(existeSocioporId),
  
  validarCampos,
],sociosPut )


router.delete("/:id", [
  validarJWT,
  esAdminRole,
  check("id", "No es un id de mongo valido").isMongoId(),
  check("id").custom(existeSocioporId),
  
  validarCampos,
],sociosDelete )

// INICIO DE EMPLEADOS
router.get("/empleados/:id", socioEmpleado)

router.post("/empleado", [
  
  check("trabajadorcuil").custom(cuiltrabajadorExisteSocio),
  validarCampos
], empleadosPost )

router.put("/empleado/:id",[
  check("id", "No es un id de mongo valido").isMongoId(),  
  validarCampos,
],  EmpleadosPut )

router.get("/empleado/detalle/:id",[
  check("id", "No es un id de mongo valido").isMongoId(),  
  validarCampos,
],  obtenerEmpleado )

router.delete("/empleado/:id", [
  check("id", "No es un id de mongo valido").isMongoId(),
  
  validarCampos,
], sociosDeleteEmpleado )
// FIN DE EMPLEADOS
module.exports = router