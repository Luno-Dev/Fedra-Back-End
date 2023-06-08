const express = require("express");
const dbConnection = require("../database/config")
class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = "/api/usuarios"
    this.authPath = "/api/auth"
    this.noticiasPath = "/api/noticias"
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
    this.app.use(this.authPath,require("../routes/auth"))
    this.app.use(this.noticiasPath,require("../routes/noticia"))

  }
  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor inicializado en ", this.port);
    });
  }
}
module.exports = Server;
