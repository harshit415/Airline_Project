const mongoose = require("mongoose")
const adminSchema = new mongoose.Schema({
     name:String,
     departure:String,
     destination:String,
     date:String,
     time:String,
     flightclass:String,
     password:String
    })

    module.exports = mongoose.model("admin" , adminSchema)

