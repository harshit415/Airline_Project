import React from 'react'
import { useState } from 'react'
import { Form, Button, Table } from 'react-bootstrap';
import BASE_URL from '../config';
import axios from 'axios'

const Search = () => {
    const [input, setInput] = useState({})
     const [mydata, setMydata] = useState([])
    const handleInput = (e) => {
        let {name, value} = e.target
        setInput({
            ...input,
            [name]:value
        }) 
    }
    const handleSubmit = async(e) => {
        e.preventDefault()
        let api = `${BASE_URL}/airway/search`
        try {
          const res = await axios.post(api,input)
          console.log(res.data)
          setMydata(res.data)
        } catch (error) {
          console.log(error)
        }
}
const ans= mydata.map((key)=>{

    return(
        <>
          <tr>
            <td>{key.name} </td>   
            <td>{key.departure} </td>       
            <td>{key.destination} </td>   
            <td>{key.date} </td>
            <td>{key.time} </td>
            <td>{key.flightclass} </td>   
           
          </tr>
        </>
      )
})
  
  return (
   <>
   
   
   <div className="container mt-4">
      <div className="card shadow-sm p-3 mb-5 bg-white rounded">
        <h3 className="text-center mb-4">Flight Search</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicAirline">
            <Form.Label className="fw-bold">Select Airline</Form.Label>
            <Form.Select
              aria-label="Default select example"
              name="name"
              onChange={handleInput}
              className="form-control form-control-lg"
            >
              <option value="">Select Airline</option>
              <option value="Fly Emirates">Fly Emirates</option>
              <option value="Air India">Air India</option>
              <option value="Qatar Airways">Qatar Airways</option>
              <option value="Etihad Airways">Etihad Airways</option>
              <option value="American Airlines">American Airlines</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDestination">
            <Form.Label className="fw-bold">Destination</Form.Label>
            <Form.Control
              type="text"
              name="destination"
              onChange={handleInput}
              placeholder="Enter destination"
              className="form-control form-control-lg"
            />
          </Form.Group>

          <div className="d-grid">
            <Button
              variant="primary"
              type="submit"
              className="fw-bold btn-lg"
            >
              Search Flights
            </Button>
          </div>
        </Form>
      </div>

      <div className="card shadow-sm p-3 mb-5 bg-white rounded">
        <h3 className="text-center mb-4">Flight List</h3>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Name</th>
              <th>Departure</th>
              <th>Destination</th>
              <th>Date</th>
              <th>Time</th>
              <th>Class</th>
            </tr>
          </thead>
          <tbody>{ans}</tbody>
        </Table>
      </div>
    </div>

   </>
  )
}

export default Search
