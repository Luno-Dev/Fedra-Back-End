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
  fecha: {
    type: Date,
    default: Date.now(),
  },
  img: [{

    type: String,


  }
  ],
  categoria:{
    type:Schema.Types.ObjectId,
    ref:"Categoria",
    required:true
},
  estado: {
    type: Boolean,
    default: true,
    required: true,
  },


})

module.exports = model("Noticia", NoticiaSchema);