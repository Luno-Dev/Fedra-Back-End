const bcrypt = require('bcryptjs');

const Socio = require("../models/socio");
const Empleados = require('../models/empleados');


const sociosGet = async (req, res) => {

  const socios = await Socio.find().populate("empleados", "eId") //{estado:true} Lo saque para que traiga todos los socios hasta los inactivos
  const total = await Socio.countDocuments()

  res.json({
    total,
    socios,

  });
};

const obtenerEmpleado = async (req, res) => {
  const { id } = req.params;

  const empleado = await Empleados.findById(id);

  res.json({
    empleado,
  });
};

const empleadosGet = async (req, res) => {

  const empleados = await Empleados.find();//{estado:true} Lo saque para que traiga todos los socios hasta los inactivos
  const total = await Empleados.countDocuments()

  res.json({
    total,
    empleados,

  });
};

const obtenerSocio = async (req, res) => {
  const { id } = req.params;

  const socio = await Socio.findById(id);

  res.json({
    socio,
  });
};

const socioEmpleado = async (req, res) => {
  const { id } = req.params;
  const empleados = await Empleados.find({socio: id});//{estado:true} Lo saque para que traiga todos los socios hasta los inactivos

 

  const empleador = await Socio.findById(id);

  res.json({
    empleador,
   empleados
    
  });
}; 

const sociosPost = async (req, res) => {


  const {
    email,
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

  const socio = new Socio(req.body);
  const salt = bcrypt.genSaltSync();
  socio.password = bcrypt.hashSync(password, salt);

  await socio.save();
  res.status(201).json({
    msg: "Socio creado con exito!",
    socio,
  })

};


const empleadosPost = async (req, res) => {
  const empleado = req.body;

  const {
    trabajadordocumento,
    trabajadornombre,
    trabajadorsueldo,
    trabajadorapellido,
    trabajadornacionalidad,
    trabajadorestadocivil,
    trabajadorsexo,
    trabajadornacimiento,
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
    trabajadorcel

  } = req.body;

  const data = {
    trabajadordocumento,
    trabajadornombre,
    trabajadorsueldo,
    trabajadorapellido,
    trabajadornacionalidad,
    trabajadorestadocivil,
    trabajadorsexo,
    trabajadornacimiento,
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
    socio: req.headers.empleador
  };

  const empleados = new Empleados(data);

  await empleados.save();
  res.status(201).json({
    msg: "Empleado creado con exito!",
    empleados,
  });
};

const sociosPut = async (req, res) => {
  const { id } = req.params;
  const { _id, password, email, ...restos } = req.body;
  if (password) {
    const salt = bcrypt.genSaltSync();
    restos.password = bcrypt.hashSync(password, salt);
  }

  const socio = await Socio.findByIdAndUpdate(id, restos, { new: true })
  res.status(201).json({
    msg: "Socio Actualizado",
    socio,
  });
};
// ///////////////EMPLEADOS PUT 
const EmpleadosPut = async (req, res) => {
  const { id } = req.params;
  const { _id, password, email, ...restos } = req.body;
  if (password) {
    const salt = bcrypt.genSaltSync();
    restos.password = bcrypt.hashSync(password, salt);
  }

  const empleado = await Empleados.findByIdAndUpdate(id, restos, { new: true })
  res.status(201).json({
    msg: "Empleado Actualizado",
    empleado,
  });
};
// ///////////////FIN EMPLEADOS PUT 
const sociosDelete = async (req, res) => {
  const { id } = req.params;
  const socioBorrado = await Socio.findByIdAndUpdate(id, { estado: false }, { new: true })
  res.json({
    msg: "Socio dado de baja  correctamente",
    socioBorrado
  });

};

const sociosDeleteEmpleado = async (req, res) => {
  const { id } = req.params;
  const socioBorrado = await Empleados.findByIdAndDelete(id);
  res.json({
    msg: "Empleado dado de baja  correctamente",
    socioBorrado
  });

};



module.exports = {
  sociosGet,
  socioEmpleado,
  sociosPost,
  sociosPut,
  sociosDelete,
  sociosDeleteEmpleado,
  obtenerSocio,
  obtenerEmpleado,
  empleadosGet,
  empleadosPost,
  EmpleadosPut,
};
