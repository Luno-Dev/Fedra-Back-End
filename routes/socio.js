const {Router} = require("express")

const router = Router()

router.get("/", function(req, res){
    res.json({
        msg:"Peticion GET SOCIOS"
    })
} )

router.post("/", function(req, res){
    res.json({
        msg:"Peticion GET SOCIOS"
    })
} )

router.get("/", function(req, res){
    res.json({
        msg:"Peticion POST SOCIOS"
    })
} )

router.put("/:id", function(req, res){
    const {id} = req.params;
    res.json({
        msg:"Peticion PUT SOCIOS"
    })
} )

router.delete("/:id", function(req, res){
    const {id} = req.params;
    res.json({
        msg:"Peticion DELETE SOCIOS"
    })
} )
module.exports = router