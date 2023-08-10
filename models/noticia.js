const { Schema, model } = require("mongoose");

const NoticiaSchema = Schema({
  titulo: {
    type: String,
    required: [true, "El titulo es obligatorio"],
  },
  descripcion: {
    type: String,
  },
  autor: {
    type: String,
    required: [true, "El autor es obligatorio"],
  },
  categoria: {
    type: Schema.Types.ObjectId,
    ref: "Categoria",
    required: true
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
  imgcuatro: {
    type: String,
  },
  imgcinco: {
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
  subtitulocuatro: {
    type: String,
  },
  subtitulocinco: {
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