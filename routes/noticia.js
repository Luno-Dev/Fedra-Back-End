const { Router } = require("express");
const { check } = require("express-validator");

const {noticiaExiste} = require("../helpers/db-validators")

const validarJWT = require("../middlewares/validar-jwt");
const { esAdminRole } = require("../middlewares/validar-role");
const { validarCampos } = require("../middlewares/validar-campos");
const { obtenerNoticias, obtenerNoticia, crearNoticia, actualizarNoticia, borrarNoticia } = require("../controllers/noticia");



const router = Router();

router.get("/",obtenerNoticias)

router.get("/:id",[
    check("id", "No es un id de mongo valido").isMongoId(),
    check("id").custom(noticiaExiste),
    validarCampos,
],obtenerNoticia)

router.post("/",[
    validarJWT,
    esAdminRole,
    check("titulo", "El titulo es obligatorio").notEmpty(),
    check("autor", "El autor es obligatorio").notEmpty(),
    validarCampos,

],crearNoticia)

router.put("/:id",[
    validarJWT,
    esAdminRole,
    check("id", "No es un id de mongo valido").isMongoId(),
    check("id").custom(noticiaExiste),
    validarCampos,

],actualizarNoticia)

router.delete("/:id",[
    validarJWT,
    esAdminRole,
    check("id", "No es un id de mongo valido").isMongoId(),
    check("id").custom(noticiaExiste),
    validarCampos,
],borrarNoticia)

module.exports= router;