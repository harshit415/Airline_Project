const express = require("express");
const route = express.Router();
const admincontroller = require("../controller/controller");

route.post("/registration", admincontroller.RegistrationData);
route.get("/show", admincontroller.DisplayData);
route.post("/login", admincontroller.LoginData); // Ensure this is a POST request
route.post("/search", admincontroller.searchData)
route.get("/getData", admincontroller.passengerList)

module.exports = route;