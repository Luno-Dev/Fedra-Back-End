const { Schema, model } = require("mongoose");

const SocioSchema = Schema({
 //INICIO DEL TRABAJADOR

  trabajadornombre: {
    type: String,
    required: [true, "El nombre del trabajador es obligatorio"],
    
  },
  trabajadorapellido: {
    type: String,
    required: [true, "El apellido del trabajador es obligatorio"],
    
  },
  trabajadornacionalidad: {
    type: String,
    required: [true, "La nacionalidad  del trabajador es obligatoria"],
    
  },
  trabajadorestadocivil: {
    type: String,
    required: [true, "El estado civil del trabajador es obligatorio"],
    
  },
  trabajadorsexo: {
    type: String,
    required: [true, "El sexo del trabajador es obligatorio"],
   
  },
  trabajadornacimiento: {
    type: String,
    required: [true, "la fecha de nacimiento del trabajador es obligatorio"],
  },
  trabajadordocumento: {
    type: String,
    required: [true, "El documento del trabajador es obligatorio"],
    unique: true,
  },
  trabajadorcuil: {
    type: String,
    required: [true, "El cuil del trabajador es obligatorio"],
    unique: true,
  },
  trabajadordomicilio: {
    type: String,
    required: [true, "El domicilio del trabajador es obligatorio"],
   
  },
  trabajadornumdomicilio: {
    type: String,
    required: [true, "El Numero de domicilio del trabajador es obligatorio"],
  },
  trabajadorpiso: {
    type: String,
    required: [true, "El piso de domicilio del trabajador es obligatorio"],
  },

  trabajadordepto: {
    type: String,
    required: [true, "El Numero de departamento del trabajador es obligatorio"],
  },
  trabajadorlocalidad: {
    type: String,
    required: [true, "La localidad del trabajador es obligatoria"],
  },
  trabajadorprovincia: {
    type: String,
    required: [true, "La provincia del trabajador es obligatoria"],
  },
  trabajadorlugardetrabajo: {
    type: String,
    required: [true, "El lugar donde trabaja el trabajador es obligatorio"],
  },
  trabajadortareas: {
    type: String,
    required: [true, "Las tareaws del trabajador en su trabajo son obligatorias"],
  },
  trabajadortel: {
    type: String,
    required: [true, "El telefono del trabajador es obligatorio"],
  },
  trabajadorcel: {
    type: String,
    required: [true, "El cel del trabajador es obligatorio"],
  },
  empleadorcuil: {
    type: String,
    required: [true, "El cuil del empleador es obligatorio"],
    unique: true,
  },
  empleadorrazonsocial: {
    type: String,
    required: [true, "La razon social del empleador es obligatoria"],
    
  },
  empleadordomicilio: {
    type: String,
    required: [true, "El domicilio del empleador es obligatorio"],
   
  },
  empleadorlocalidad: {
    type: String,
    required: [true, "La localidad del empleador es obligatoria"],
 
  },
  empleadorprovincia: {
    type: String,
    required: [true, "La provincia del empleador es obligatoria"],
 
  },
  empleadortrabajodomicilio: {
    type: String,
    required: [true, "El domicilio del trabajo del empleador es obligatorio"],
 
  },
  empleadortrabajolocalidad: {
    type: String,
    required: [true, "La localidad del trabajo del empleador es obligatorio"],
  },
  empleadortrabajoprovincia: {
    type: String,
    required: [true, "La provincia del trabajo del empleador es obligatoria"],
  },
  empleadoractividad: {
    type: String,
    required: [true, "La actividad del trabajo del empleador es obligatoria"],
  },
  
  email: {
    type: String,
    required: [true, "El email es obligatorio"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "El password es obligatorio"],
  },
  role: {
    type: String, 
    default: "SOCIO_ROLE",
  },
  img: {
    type: String,
  },
  estado: {
    type: Boolean,
    default: true,
  },
});

SocioSchema.methods.toJSON = function () {
  const { __v, password,  _id, ...socio } = this.toObject();
  socio.socioid = _id;
  return socio;
};

module.exports = model("Socio", SocioSchema);