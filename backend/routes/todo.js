const express = require("express");
const Todo = require("../schema/todo.js");

const router = express.Router();

router.post("/create", async function (req, res) {

    let success= false;

    try {
        const newTodo = new Todo({
            work: req.body.work,
            tag: req.body.tag
        });

        await newTodo.save();

        success= true;
        res.json({success, newTodo});
        // console.log(newTodo);

    }
    catch (error) {
        console.log(error);
        res.json({success, error});
    }
});


router.get("/get", async function (req, res) {

    let success= false;

    try {
        const total = await Todo.find().select("-__v -date");

        success= true;
        res.json({success, total});
        // console.log(total);    
    }
    catch (error) {
        console.log(error);
        res.json({success, error});
    }
});


router.delete("/delete", async function (req, res) {

    let success= false;

    try {
        const item = await Todo.findByIdAndDelete(req.body.id);

        success= true;
        res.json({success, item});
        // console.log(item);
    }
    catch (error) {
        console.log(error);
        res.json({success, error});
    }
});


router.delete("/deleteAll", function(req, res){

    let success= false;

    try {
        success= true;

        Todo.collection.drop();
        res.json({success, msg: "Successfully deleted all the todo's from the list."});        
    } 
    catch (error) {
        console.log(error);
        res.json({success, error: "Internal server error."});        
    }
});


module.exports = router;