const express= require("express");
const connectToMongo= require("./db.js");
const cors= require("cors");

const app= express();
const port= 5000; 

connectToMongo();

app.use(cors());
app.use(express.json());

// Available routes
app.use("/api/todo", require("./routes/todo.js"));

app.listen(port, function(){
    console.log("The server has started at port 5000.");
});