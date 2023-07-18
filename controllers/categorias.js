const { request, response } = require("express");
const Categoria = require("../models/categoria");

//OBTENER TODAS LAS CATEGORIAS
const obtenerCategorias = async (req = request, res = response) => {
  const { limite = 0, desde = 0 } = req.query;
 
  const consulta = { estado: true };

  const categorias = await Categoria.find(consulta)
  .skip(desde)
  .limit(limite).populate("usuario","nombre email").populate("noticias")

  const total = await Categoria.countDocuments(consulta)

  res.status(200).json({
    total,
    
    categorias 
  })

};

//OBTENER UNA CATEGORIA
const obtenerCategoria =  async (req = request, res = response)=>{
        const {id} = req.params 
       
        const categoria = await Categoria.findById(id).populate("usuario","nombre email")

        res.status(200).json({
            categoria,
           
        })


}
//CREAR CATEGORIA NUEVA
const crearCategoria = async (req = request, res = response) => {
  const nombre = req.body.nombre.toUpperCase();
  const { noticias} = req.body;
  const categoriaDB = await Categoria.findOne({ nombre });

  if (categoriaDB) {
    return res.status(400).json({
      msg: `La categoria ${categoriaDB.nombre} ya existe`,
    });
  }

  //generar la data para guardar
  const data = {
    nombre,
    usuario: req.usuario._id,
    noticias
  };
  const categoria = new Categoria(data);

  await categoria.save();

  res.status(400).json({
    msg: "Categoria creada correctamente",
    categoria,
  });
};
//ACTUALIZAR CATEGORIA 
const actualizarCategoria =  async (req = request, res = response)=>{
    const {id} = req.params 
    const nombre = req.body.nombre.toUpperCase();
    const usuario = req.usuario._id
    const datos ={
        nombre,
        usuario,
        noticia
    }
    const categoria = await Categoria.findByIdAndUpdate(id,datos,{new:true})

    res.status(200).json({
        msg:"Categoria Acualizada",
        categoria

    })
}
//BORRAR CATEGORIA
const borrarCategoria = async (req = request, res = response) => {
    const { id } = req.params;
  
    const categoriaBorrada = await Categoria.findByIdAndDelete(id);
    res.status(200).json({ 
      msg:"Categoria borrada",
      categoriaBorrada 
  });
  };

module.exports = {
  crearCategoria,
  obtenerCategorias,
  obtenerCategoria,
  actualizarCategoria,
  borrarCategoria 
};