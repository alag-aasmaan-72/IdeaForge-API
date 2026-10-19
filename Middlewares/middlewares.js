exports.validate_post_body = (req , res , next ) =>{
    const req_post_body = req.body 


    if(!req_post_body["idea_name"]) {
        return res.status(400).send(
            {
                message : "bad request fill the idea_name"
            }
        )

    }


    // if(!req_body[id]) {
    //     return res.status(400).send(
    //         {
    //             message : "bad request fill the id"
    //         }
    //     )

    // }

        if(!req_post_body["idea_description"]) {
         return res.status(400).send(
            {
                message : "bad request fill the idea_description"    
            }
        )

    }


    next()


}



exports.validate_put_body = (req , res , next ) =>{
    const req_put_body = req.body 

    
    if(!req_put_post_body["idea_name"]) {
        return res.status(400).send(
            {
                message : "bad request fill the idea_name"
            }
        )

    }


    if(req_put_post_body[id] != req.params.id ) {
        return res.status(400).send(
            {
                message : "bad request fill the id"
            }
        )

    }

        if(!req_put_body["idea_description"]) {
        return res.status(400).send(
            {
                message : "bad request fill the idea_description"    
            }
        )

    }


    next()


}














