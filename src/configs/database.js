const mongoose = require("mongoose");

const connect = mongoose.connect("mongodb/localhost/testdb");


module.exports = mongoose.model(connect);