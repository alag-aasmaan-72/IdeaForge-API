/* Server file  */

const express = require("express")  ;
const morgan = require("morgan") ;
const mongoose = require("mongoose");
const path = require("path");

require("dotenv").config({
    path: path.join(__dirname, ".env")
});


const app = express()  ;

const port = 5000 

app.use(morgan('dev'))  


const idea_route = require("../routers/idaes.roter.js")  ;
const auth_route = require("../routers/auth.route.js")   ;

app.use(express.json());  


(async ()=>{

    try {
        await mongoose.connect(process.env.the_url)
        console.log('connection succesfull');


        
    } catch (error) {
        console.log(error);
        
        
    }finally{
    
        

    }

})()

app.use("/ideas_app/v1" , idea_route)   


app.use("/ideas_app/v1" , auth_route)

app.listen(port , () => { 
    console.log(`server started on the ${port}`);
    
 })   

