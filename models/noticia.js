const { Schema, model } = require("mongoose");

const NoticiaSchema = Schema({
  titulo: {
    type: String,
    required: [true, "El titulo es obligatorio"],
  },
  descripcion: {
    type: String,
    required: [true, "La descripcion es obligatoria"],
  },
  autor: {
    type: String,
    required: [true, "El autor es obligatorio"],
  },
  fecha: {
    type: Date,
    default: Date.now(),
  },
  imguno: {
    type: String,
   
  },
  subtitulouno: {
    type: String,
    required: [true, "El subtitulo es obligatorio"],
  },
  imgdos: {
    type: String,
    required: true
   
  },
  subtitulodos: {
    type: String,
  },
  imgtres: {
    type: String,
    
  },
  subtitulotres: {
    type: String,
   
  },
  categoria:{
    type:Schema.Types.ObjectId,
    ref:"Categoria",
    required:true,
},

  estado: {
    type: Boolean,
    default: true,
    required: true,
  },


})

module.exports = model("Noticia", NoticiaSchema);