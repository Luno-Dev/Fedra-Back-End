const { Schema, model } = require("mongoose");

const SocioSchema = Schema({
  //INICIO DEL TRABAJADOR
  empleados: [{
    type:Schema.Types.ObjectId,
    ref:"Empleados",
  }],

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
    default: "ADMIN_ROLE",
  },
  img: {
    type: String,
  },
  convenio: {
    type: String,
    enum: ["SUTCAPRA", "SUTEP"],
    default: "SUTCAPRA",
  },
  estado: {
    type: Boolean,
    default: true,
  },
  estadoPago: {
    type: Boolean,
    default: false,
  },
});


SocioSchema.methods.toJSON = function () {
  const { __v, password, _id, ...socio } = this.toObject();
  socio.socioid = _id;
  return socio;
};

module.exports = model("Socio", SocioSchema);