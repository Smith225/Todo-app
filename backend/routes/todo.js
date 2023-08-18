const express= require("express");
const Todo= require("../schema/todo.js");

const router= express.Router();

router.post("/create", async function(req, res){

    const newTodo= new Todo({
        work: req.body.work,
        tag: req.body.tag        
    });

    await newTodo.save();
    
    res.send(newTodo);
    console.log(newTodo);
})


router.get("/get", async function(req, res){

    const total= await Todo.find();

    res.send(total);
    console.log(total);
});

router.delete("/delete", async function(req, res){

    const item= await Todo.findByIdAndDelete(req.body.id);

    res.send(item);
    console.log(item);
})


module.exports= router;