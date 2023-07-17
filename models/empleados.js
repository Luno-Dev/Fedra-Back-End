const { Schema, model } = require("mongoose");

const EmpleadosSchema = Schema({
  //INICIO DEL TRABAJADOR
  empleador: {
    type:Schema.Types.ObjectId,
    ref:"Socio",
     
  },
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
    trabajadorsueldo: {
      type: Number,
      required: [true, "El sueldo del trabajador es obligatorio"],
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

    },

    trabajadordepto: {
      type: String,

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
});


EmpleadosSchema.methods.toJSON = function () {
  const { __v, _id, ...empleados } = this.toObject();
  empleados.eId = _id;
  return empleados;
};

module.exports = model("Empleados", EmpleadosSchema);