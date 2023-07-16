const bcrypt = require('bcryptjs');

const Socio = require("../models/socio");
const Empleados = require('../models/empleados');


const sociosGet = async (req, res) => {
 
  const socios = await Socio.find().populate("empleados","trabajadornombre") //{estado:true} Lo saque para que traiga todos los socios hasta los inactivos
  const total = await Socio.countDocuments()

  res.json({
    total,
   socios,
    
  });
};
const sociosPost = async (req, res) => {

  
  const {
    email,
    trabajadornombre,
    trabajadorsueldo,
    trabajadorapellido,
    trabajadornacionalidad,
    trabajadorestadocivil,
    trabajadorsexo,
    trabajadornacimiento,
    trabajadordocumento,
    trabajadorcuil,
    trabajadordomicilio,
    trabajadornumdomicilio,
    trabajadorpiso,
    trabajadordepto,
    trabajadorlocalidad,
    trabajadorprovincia,
    trabajadorlugardetrabajo,
    trabajadortareas,
    trabajadortel,
    trabajadorcel,
    empleadorcuil,
    empleadorrazonsocial,
    empleadordomicilio,
    empleadorlocalidad,
    empleadorprovincia,
    empleadortrabajodomicilio,
    empleadortrabajolocalidad,
    empleadortrabajoprovincia,
    empleadoractividad,
   password,
   role,
    img,
 
  } = req.body;

  const socio = new Socio(req.body );

  const salt = bcrypt.genSaltSync();
  socio.password = bcrypt.hashSync(password, salt);

  await socio.save();
 res.status(201).json({
    msg:"Socio creado con exito!",
    socio,
  });
};


const empleadosPost = async (req, res) => {

  

  const empleados = new Empleados(req.body );
  
console.log(req.socio);
  await empleados.save();
 res.status(201).json({
    msg:"Empleado creado con exito!",
    empleados,
  });
};

const sociosPut =async(req, res) => {
  const { id } = req.params;
  const {_id,password, email,...restos} = req.body;
  if(password){
    const salt = bcrypt.genSaltSync();
    restos.password = bcrypt.hashSync(password, salt);
  }
  
  const socio = await Socio.findByIdAndUpdate(id,restos,{new:true})
  res.status(201).json({
    msg: "Socio Actualizado",
    socio,
  });
};
const sociosDelete = async(req, res) => {
  const { id } = req.params;
  const socioBorrado = await Socio.findByIdAndUpdate(id,{estado:false},{new:true})
  res.json({
    msg: "Socio dado de baja  correctamente",
    socioBorrado
  });
 
};

const sociosDeleteEmpleado = async(req, res) => {
  const { id } = req.params;
  const socioBorrado = await Socio.empleados.findByIdAndDelete(id);
  res.json({
    msg: "Empleado dado de baja  correctamente",
    socioBorrado
  });
 
};

const obtenerSocio= async (req, res) => {
  const { id } = req.params;

  const socio = await Socio.findById(id);

  res.json({
    socio,
  });
};

module.exports = {
  sociosGet,
  sociosPost,
  empleadosPost,
  sociosPut,
  sociosDelete,
  sociosDeleteEmpleado,
  obtenerSocio,
};
