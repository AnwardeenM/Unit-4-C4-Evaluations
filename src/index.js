const express = require("express");

const app = express();

app.listen("4999",()=>{
    console.log("listening on port 4999");
})

module.exports = app;

