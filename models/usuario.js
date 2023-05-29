const {Schema,model} = require("mongoose") ;

const UsuarioSchema = Schema({
    nombre:{
        type:String,
        required:[true,"El nombre es obligatorio"]

    },
    email:{
        type:String,
        required:[true,"El email es obligatorio"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"El password es obligatorio"]
    },
    role:{
        type:String,
        enum:["ADMIN_ROLE", "USER_ROLE"],
        default:"ADMIN_ROLE"
    },
    img:{
        type:String,
    },
    estado:{
        type:Boolean,
        default:true
    }

})

module.exports = model("Usuario",UsuarioSchema) ;