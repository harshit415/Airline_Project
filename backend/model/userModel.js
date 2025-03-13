const mongoose= require("mongoose")
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    mobile: String,
    flightclass: String,
    country: String,
    adminid: {
        type:mongoose.Schema.ObjectId,
        ref:"admin"
    }
   

})
module.exports = mongoose.model("user", userSchema)