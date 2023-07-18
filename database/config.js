const mongoose = require('mongoose');

const dbConnection = async ()  => {
    try {
         await mongoose.connect(process.env.MONGODB_CNN);
    console.log("Base de datos Fedra online") 
    } catch (error) {
        console.log(error)
        throw new Error("No se pudo conectar a la base de datos")
    }
  
}
const config = {
    application: {
        cors: {
            server: [
                {
                    origin: "localhost:4000", //servidor que deseas que consuma o (*) en caso que sea acceso libre
                    credentials: true
                }
            ]
        }
}}

module.exports = {
    dbConnection,
    config
};