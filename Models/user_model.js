const mongoose = require("mongoose") 

const user_schema = new mongoose.Schema({
    name:{type:String , required: true } , 
    user_id:{type:String , required: true , unique : true},
    password:{type:String , required: true , unique : true},
    email:{type:String , required: true , unique : true , lowecase :" true "}
} , 
{timestamps:true }  
)



module.exports = mongoose.model("users" , user_schema)    


