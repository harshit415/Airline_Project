const express = require("express")
const route = express.Router();
const userController = require("../controller/userController")
route.get("/myflights", userController.userDisplay)
route.post("/bookedflight", userController.dataSave)

module.exports = route