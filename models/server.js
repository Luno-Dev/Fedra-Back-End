const express = require("express");
const dbConnection = require("../database/config")
class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = "/api/usuarios"
    this.conectarDb();

    this.middleware()
    this.routes()
    
  }

  async conectarDb (){
    await dbConnection();
  }


  middleware(){
    this.app.use(express.json())
    this.app.use(express.static("public"))
   
  }
  routes() {

    this.app.use(this.usuariosPath,require("../routes/usuarios"))

  }
  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor inicializado en ", this.port);
    });
  }
}
module.exports = Server;
