const users = require("../models/user_model.js") ; 
const bcrypt = require("bcrypt") ; 

const jwt = require("jsonwebtoken")

const config = require("../config/auth.config")

/*logic for registratio or sign up */   

exports.signup = async(req , res) =>{ 

    const user_obj = {
        name: req.body.name , 
        user_id : req.body.user_id  ,
        email : req.body.email , 
        password : bcrypt.hashSync(req.body.password , 8)
    }


    try { 
        const user_created = await users.create(user_obj)
        const post_response = { 
            name: user_created.name ,  
            userid : user_created.user_id , 
            email : user_created.email ,
            created_at : user_created.createdAt , 
            updated_at : user_created.updatedAt , 
            message : "registration done"
        }

        res.status(201).send(post_response)
    } catch (error) {

        console.log(error);
        res.send("some error occured bro ")
        
        
    }


}

/*************************************************************/



/*logic for sign in  */    

exports.signin = async (req , res) =>{
    /*check if the user exists*/ 

    const user = await users.findOne({user_id:req.body.user_id})  
    console.log(user); 

    if(user == null) {
        res.status(400).send({
            message: "user id do not exist"
        })
        return 
    }
    



    // if the password matches 

    const passwordis = bcrypt.compareSync( req.body.password , user.password )
    if(passwordis == false) {
        res.status(400).send({
            message : "password is wrong"
        })
    }



    //return the jwt token generated 
    const token = jwt.sign({id : user.user_id }, config.secret , {
        expiresIn : 60 
    })

    res.status(200).send({
        name : user.user_id , 
        email: user.email , 
        accesstoken : token
    })
     


}
