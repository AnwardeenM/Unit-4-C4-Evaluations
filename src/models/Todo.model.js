const mongoose = require("mongoose");

const Todo = new mongoose.Schema({
    
    title:{type:String,required:true}
},{
    versionKey:false,
    timestamps:true
});

module.exports = Todo