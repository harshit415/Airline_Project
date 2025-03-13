const model = require("../model/model");
const userModel = require("../model/userModel")
const RegistrationData = async (req, res) => {
    let {
        name,
        departure,
        destination,
        date,
        time,
        flightclass,
        password
    } = req.body;

    try {
        let Data = await model.create({ // Use "model" instead of "adminModel"
            name: name,
            departure: departure,
            destination: destination,
            date: date,
            time: time,
            flightclass: flightclass,
            password: password
        });
        res.status(200).send(Data);
    } catch (error) {
        console.error("Error:", error.message); // Log the error for debugging
        res.status(400).send(error.message);
    }
};

const DisplayData = async(req , res)=>{
    try {
        const data = await model.find()
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send(error)
    }
}

const LoginData = async (req, res) => {
    const { name, password } = req.body;
  
    try {
      
      const data = await model.findOne({ name: name });
  
      if (!data) {
        return res.status(400).send("Invalid name"); // Return early
      }
  
     
      if (data.password !== password) {
        return res.status(400).send("Invalid password"); // Return early
      }
  
      // If login is successful
      res.status(200).send(data);
    } catch (error) {
      console.error("Login error:", error.message); // Log the error
      res.status(500).send("An error occurred during login"); // Send a generic error message
    }
  };

  const searchData = async(req, res) => {
    const {name, destination} = req.body
    const admin = await model.find({$or:[{"name":name}, {"destination":destination}]})
    console.log(admin)
    res.status(200).send(admin);
  }

  const passengerList = async (req, res) => {
    const { adminid } = req.query;
    console.log(adminid) // adminid is from the query parameter
    try {
      // Use the correct field name (adminId) in the query
      const passenger = await userModel.find({ adminid: adminid });
    console.log(passenger)
 
      res.status(200).send(passenger);
    } catch (error) {
     
      res.status(500).send({ message: "Error fetching passengers" });
    }
  };
module.exports = {
    RegistrationData,
    DisplayData,
    LoginData,
    searchData,
    passengerList
};