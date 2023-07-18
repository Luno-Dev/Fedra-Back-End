const { Schema, model } = require("mongoose");

const NoticiaSchema = Schema({
  titulo: {
    type: String,
    required: [true, "El nombre es obligatorio"],
  },
  descripcion: {
    type: String,
  },
  autor: {
    type: String,
    required: [true, "El autor es obligatorio"],
  },
  categoria:{
    type:Schema.Types.ObjectId,
    ref:"Categoria",
   },
  fecha: {
    type: Date,
    default: Date.now(),
  },
  imguno: {
    type: String,
  },
  imgdos: {
    type: String,
  }, 
  imgtres: {
    type: String,
  }, 
  subtitulouno: {
    type: String,
  }, 
  subtitulodos: {
    type: String,
  }, 
  subtitulotres: {
    type: String,
  }, 
  estado: {
    type: Boolean,
    default: true,
    required: true,
  },


})

module.exports = model("Noticia", NoticiaSchema);