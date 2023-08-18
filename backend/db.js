const mongoose= require("mongoose");

const url= "mongodb://127.0.0.1/Todo";

function connectToMongo(){
    mongoose.connect(url).then( function(){
        console.log("Mongo connection is started.");
    }).catch(function(error){
        console.log(error);
    })
};

module.exports= connectToMongo;

