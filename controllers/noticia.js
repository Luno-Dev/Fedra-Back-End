const Noticia = require("../models/noticia")

// get para traer todos los productos paginados
const obtenerNoticias = async(req,res) =>{
    const {limite = 5,desde =0} = req.query;
    const query = {estado:true};

    const [total, noticias] = await Promise.all([
        Noticia.countDocuments(query),
        Noticia.find(query)
        .skip(Number(desde))
        .limit(Number(limite))
    ])
res.json({
    total,
    noticias
})
}
module.exports ={
    obtenerNoticias,
}