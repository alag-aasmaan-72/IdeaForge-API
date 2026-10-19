
const config = require("../config/auth.config") ; 
const jwt = require("jsonwebtoken")

const verify_token = (req , res , next) =>{
    //verification 


    //fetch the acccess token from the header 

    const token = req.headers.acc
    if(!token) {
        return res.status(403).send({
            message: "no token provided"
        })
    }


    /**check if token is still valid  */   
    jwt.verify(token , config.secret, (err, decoded) =>{
        if(err) {
            res.status(401).send({
                message: "unathorized" 
            })
        }


    })

    next()
}


module.exports = {verify_token}