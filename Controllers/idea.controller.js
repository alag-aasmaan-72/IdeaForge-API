const idea = require("../models/ideas.models.js")

let id_no = 3 

exports.getallideas = (req , res) =>{
    res.status(200).send(idea)
}


exports.getideasonindex = (req , res) =>{

    
    const idea_id = req.params.id
    
    if(idea[idea_id]){
     res.status(200).send(idea[idea_id])
    }
    else {
        console.log('idea not availabile');
        res.status(404).send("error not found ")
        
    }
    }

exports.createidea =(req , res) =>{  
    id_no = id_no +1 
    idea_obj = req.body   
    console.log(idea_obj);
    
    idea_obj["id"] = id_no 
    idea[id_no] = idea_obj     

    res.status(201).send(idea)

}
exports.updateidea = (req , res) =>{
const id_update = req.params.id 
const updated_idea = req.body   
console.log(updated_idea);


if(idea[id_update]) {
    idea[id_update] = updated_idea
    res.send(idea)
}
else{
    res.status(404).send("not available ")
}

}


exports.deleteidea = (req , res) =>{
    const id_del = req.params.id 
    if(idea[id_del]){
        delete idea[id_del]  
        res.send(idea)
    }
    else{
        res.send("can not be deleted")
    }
    
}