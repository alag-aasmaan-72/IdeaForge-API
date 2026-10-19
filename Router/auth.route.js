const express = require("express") 


const route = express.Router()  
const user_midd = require("../middlewares/middleware_verify_user.js")

const auth_controller = require("../controller/auth.controller.js")

route.post("/auth/signup" , user_midd.verifyuserbodyrequest, auth_controller.signup)

route.post("/auth/signin" , auth_controller.signin )


module.exports = route 