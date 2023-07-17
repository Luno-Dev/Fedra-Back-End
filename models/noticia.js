const { Schema, model } = require("mongoose");

const NoticiaSchema = Schema({
  titulo: {
    type: String,
    required: [true, "El nombre es obligatorio"],
  },
  descripcion: {
    type: String,
    required: [true, "La descripcion es obligatoria"],
  },
  autor: {
    type: String,
    required: [true, "El autor es obligatorio"],
  },
  categoria:{
    type:Schema.Types.ObjectId,
    ref:"Categoria",
    required:true,
},
  fecha: {
    type: Date,
    default: Date.now(),
  },
  imguno: {
    tyoe: String,
  },
  imgdos: {
    tyoe: String,
  }, 
  imgtres: {
    tyoe: String,
  }, 
  subtitulouno: {
    tyoe: String,
  }, 
  subtitulodos: {
    tyoe: String,
  }, 
  subtitulotres: {
    tyoe: String,
  }, 
  estado: {
    type: Boolean,
    default: true,
    required: true,
  },


})

module.exports = model("Noticia", NoticiaSchema);