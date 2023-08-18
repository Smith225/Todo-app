const express = require("express");
const Todo = require("../schema/todo.js");

const router = express.Router();

router.post("/create", async function (req, res) {

    try {
        const newTodo = new Todo({
            work: req.body.work,
            tag: req.body.tag
        });

        await newTodo.save();

        res.send(newTodo);
        // console.log(newTodo);

    }
    catch (error) {
        console.log(error);
        res.send(error);
    }
});


router.get("/get", async function (req, res) {

    try {
        const total = await Todo.find().select("-__v -date");

        res.send(total);
        // console.log(total);    
    }
    catch (error) {
        console.log(error);
        res.send(error);
    }
});


router.delete("/delete", async function (req, res) {

    try {
        const item = await Todo.findByIdAndDelete(req.body.id);

        res.send(item);
        // console.log(item);
    }
    catch (error) {
        console.log(error);
        res.send(error);
    }
});


module.exports = router;