const mongoose = require("mongoose");

const app = require("./index");

// const connect = require("./configs/database")

const user = require("./models/User.model");

const todo = require("./models/Todo.model");

app.get("/users",login,(req,res)=>{
    
    return res.send({route:"users"});
});

function login(req,res,next){
    console.log("before logged in route handler");
    next();
    console.log("after logged in route handler");
}

// create POST request that the user can register 

//create a GET request for the user to login 


//create a POST("/todos") for the users to get the overall todo list 

//create GET request 

