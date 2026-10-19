const express = require("express")  

const route = express.Router()  

const ideas_controller = require("../controller/idea.controller.js")

const idea_middlewares = require("../middlewares/middlewares.js")


const auth_mw  = require("../middlewares/auth.middleware.js") 
/* route for fetch all idea */  

route.get("/ideas" ,[auth_mw.verify_token]  ,  ideas_controller.getallideas)
/*****************************************************/


/*route to fetch idea based on index*/
route.get("/ideas/:id" , ideas_controller.getideasonindex)

/***********************************************************/   

/*to create a new idea */
route.post("/ideas"  , idea_middlewares.validate_post_body,  ideas_controller.createidea)
/************************************************************/  


/*to update any idea*/

route.put("/ideas/:id" , idea_middlewares.validate_put_body ,  ideas_controller.updateidea)
/****************************************************************/


route.delete("/ideas/:id" , ideas_controller.deleteidea)

module.exports = route    


