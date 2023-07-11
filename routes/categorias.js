const {Router} = require("express");
const { check } = require("express-validator");
const { crearCategoria, obtenerCategorias, obtenerCategoria, actualizarCategoria, borrarCategoria } = require("../controllers/categorias");
const { categoriaExiste }  = require("../helpers/db-validators");
const { validarCampos } = require("../middlewares/validar-campos");
const validarJWT = require("../middlewares/validar-jwt");
const {esAdminRole} = require("../middlewares/validar-role");

const router =Router();

router.get("/", obtenerCategorias)

router.get("/:id",[
    check("id","No es un id valido").isMongoId(),
    check("id").custom(categoriaExiste),
    validarCampos
], obtenerCategoria)

router.post("/",[
    validarJWT,
    check("nombre","El nombre es obligatorio").notEmpty(),
    validarCampos

    
], crearCategoria)

router.put("/:id",[
    validarJWT,
    esAdminRole,
    check("nombre","El nombre es obligatorio").notEmpty(),
    check("id","No es un id valido").isMongoId(),
    check("id").custom(categoriaExiste),
    validarCampos, 
], actualizarCategoria)

router.delete("/:id",[
    validarJWT,
    esAdminRole,
    check("id","No es un id de mongo valido").isMongoId(),
    check("id").custom(categoriaExiste),
    validarCampos
], borrarCategoria);  


module.exports = router;    