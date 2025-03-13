const model = require("../model/model")
const userModel = require("../model/userModel")

const dataSave = async (req, res) => {
    const {adminid, name, email, mobile, flightclass, country} = req.body
    const user =  await userModel.create(
        {
        name:name,
        email:email,
        mobile:mobile,
        flightclass:flightclass,
        country:country,
        adminid:adminid
        }
    ) 
    res.status(200).send({msg:"Your Flighrt Booked!"});
}
const userDisplay = async (req, res) => {
    const {id} = req.query
    try {
        const user = await model.findById(id);
        
        res.status(200).send(data);
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    userDisplay,
    dataSave
}