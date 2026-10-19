const users = require("../models/user_model")



exports.verifyuserbodyrequest = async (req , res  , next ) =>{
   if(!req.body.name) {
    res.status(400).send({
        message : "user name is not provided"
    })
    return ; 
   }


    if(!req.body.user_id) {
    res.status(400).send({
        message : "username is not provided"
    })
    return ; 
   }

    const l1 = await users.find({},{user_id:1 , _id:0})

    l1.forEach(i =>{
        if(i.user_id == req.body.user_id){
             res.status(400).send({
        message : "this user id is already avilabile "
        
    })
    return 

        }
    })


    const l2 = await users.findOne({
        email:req.body.email
    })
    if(l2 != null) {
        res.status(400).send(
            {
                message :  "duplicate email "
            }
        )
    }

    next()  
}