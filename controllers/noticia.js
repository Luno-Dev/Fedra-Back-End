const Noticia = require("../models/noticia");

// get para traer todos los productos paginados
const obtenerNoticias = async (req, res) => {
  const { limite = 5, desde = 0 } = req.query;
  const query = { estado: true };

  const [total, noticias] = await Promise.all([
    Noticia.countDocuments(query),
    Noticia.find(query).skip(Number(desde)).limit(Number(limite)),
  ]);
  res.json({
    total,
    noticias,
  });
};
// ----------------------------------------------------------------
// Trer un producto por su id
const obtenerNoticia = async (req, res) => {
  const { id } = req.params;
console.log(id);
  const noticia = await Noticia.findById(id);

  res.json({
    noticia,
  });
};
// ----------------------------------------------------------------
// Crear producto nuevo
const crearNoticia = async (req, res) => {
  const { descripcion, autor,  img } = req.body;
  const titulo = req.body.titulo.toUpperCase();
  const noticiaDb = await Noticia.findOne({ titulo });
  if (noticiaDb) {
    return res.status(400).json({
      msg: `La noticia ${noticiaDb.titulo} ya existe`,
    });
  }
  //generar la data a guardar
  const data = {
    titulo,
    descripcion,
    autor,
    
    img,
  };
  const noticia = new Noticia(data)

  await noticia.save();
  res.status(201).json({
    msg:"Se creo una nueva noticia",
    noticia
  })

};
//----------------------------------------------------------------
//actualizar producto

    const actualizarNoticia = async (req, res) => {
        const {id} = req.params;
        const { descripcion, autor,  img } = req.body;


        let data ={
            descripcion, autor,  img
        }
        if(req.body.titulo){
            data.titulo =  req.body.titulo.toUpperCase();
        }

        const noticia = await Noticia.findByIdAndUpdate(id,data,{new:true})
        res.status(200).json({
            msg:"Noticia actualizada correctamente",
            noticia
        })
        
    }
    const borrarNoticia = async (req,res)=>{
        const {id} = req.params;
        const noticiaBorrada = await Noticia.findByIdAndUpdate(id,{estado:false},{new:true})
        res.json({
            msg:"Noticia borrada correctamente",
            noticiaBorrada
        })
    }
module.exports = {
  obtenerNoticias,
  obtenerNoticia,
  crearNoticia,
  actualizarNoticia,
  borrarNoticia
};
