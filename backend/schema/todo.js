const mongoose= require("mongoose");

const todoSchema= new mongoose.Schema({

    work: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        default: "General"
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

const Todo= mongoose.model("todo", todoSchema);

module.exports= Todo;