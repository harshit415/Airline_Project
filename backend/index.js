const express  = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")
require("dotenv").config()
const mongoose = require("mongoose")
const Port  = process.env.PORT || 8080
const route = require("./route/route")
const userRoute = require("./route/userRoute")
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))
mongoose.connect(process.env.DB_CONNECTION).then(()=>{
    try {
        console.log("DB Connected")
    } catch (error) {
        console.log(error)
    }
    })

    app.use("/airway", route)
    app.use("/myairway", userRoute)
    app.listen(Port , ()=>{
        console.log(`listening at the port of ${Port}`)
    })