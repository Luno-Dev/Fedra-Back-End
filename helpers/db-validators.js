const Noticia = require("../models/noticia")
const  Role  = require ("../models/role")
const Socio = require("../models/socio")
const Usuario = require ("../models/usuario")

  const esRoleValido = async(role="")=>{
    const existeRole= await Role.findOne({role})
    if(!existeRole){
      throw new Error(`El role ${role} no existe en la BD`)
    }
  }
  const emailExiste = async(email)=>{
  const existeEmail = await Usuario.findOne({email})
  if(existeEmail){
    throw new Error(`El email ${email} ya existe en la BD`)
    
  }}

  const existeUsuarioporId = async(id)=>{
    const existeUsuario = await Usuario.findOne({_id: id})
    if(!existeUsuario){
      throw new Error(`El id ${id} no existe en la BD`)
      
    }
}

const noticiaExiste = async(id)=>{
  const existeNoticia = await Noticia.findById(id)
  if(!existeNoticia){
    throw new Error(`La noticia con el ${id} no existe en la BD`)
    
  }
}

//email de socios existe
const emailExisteSocio = async(email)=>{
  const existeEmailSocio = await Socio.findOne({email})
  if(existeEmailSocio){
    throw new Error(`El email ${email} ya existe en la BD`)
    
  }}

  const existeSocioporId = async(id)=>{
    const existeSocio = await Socio.findOne({_id: id})
    if(!existeSocio){
      throw new Error(`El id ${id} no existe en la BD`)
      
    }
}
  module.exports = {
    esRoleValido,
    emailExiste,
    existeUsuarioporId,
    noticiaExiste,
    emailExisteSocio,
    existeSocioporId
  }